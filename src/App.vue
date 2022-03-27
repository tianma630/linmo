<template>
  <section class="words" v-if="words.length > 0" ref="wordRef">
    <span
      :class="[
        'word',
        {
          active: i === index,
        },
      ]"
      v-for="(item, i) in words"
      :key="i"
      @click="onWord(i)"
      >{{ item }}</span
    >
  </section>

  <section class="paints">
    <div class="slash1"></div>
    <div class="slash2"></div>
    <div class="slash3"></div>
    <div class="slash4"></div>
    <div class="text">{{ words[index] }}</div>
    <canvas ref="paintRef"></canvas>
  </section>

  <section class="btns">
    <div class="btn last" @click="onLast">
      <img src="./assets/arrow.png" alt="" />
    </div>
    <div class="btn" @click="onClear">撤销</div>
    <div class="btn next" @click="onNext">
      <img src="./assets/arrow.png" alt="" />
    </div>
    <div class="btn" @click="onCreateImg">生成图片</div>
    <div class="btn" @click="onInputWord">录入字帖</div>
    <div class="btn" @click="toSelectWord">选择字帖</div>
    <div class="btn" @click="toSelectWidth">毛笔粗细</div>
    <div class="btn" @click="toSelectColor">毛笔颜色</div>
  </section>

  <van-image-preview
    v-model:show="isPreview"
    :images="previewImgs"
    :showIndex="false"
    :closeable="true"
  >
    <template v-slot:cover>
      <div class="save">
        <van-button @click="saveImgToLocal">保存图片</van-button>
        <van-button type="primary" style="margin-left: 8px" @click="toShareImg"
          >分享图片</van-button
        >
      </div>
    </template>
  </van-image-preview>

  <van-dialog
    v-model:show="isDialog"
    title="录入字帖"
    show-cancel-button
    @confirm="onConfirmInputWord"
    @cancel="onCancelInputWord"
  >
    <van-cell-group inset>
      <van-field
        v-model="inputValue"
        rows="1"
        autosize
        label="字帖"
        type="textarea"
        placeholder="请录入字帖"
      />
    </van-cell-group>
  </van-dialog>

  <van-popup v-model:show="isSelect" round position="bottom">
    <van-cascader
      v-model="selectValue"
      title="请选择字帖"
      :options="selectOptions"
      @close="onCloseSelect"
      @finish="onSelect"
    />
  </van-popup>

  <van-popup v-model:show="isWidth" round position="bottom">
    <van-picker
      title="选择毛笔粗细"
      :columns="widthColumns"
      @confirm="onConfirmWidth"
    />
  </van-popup>

  <van-popup v-model:show="isColor" round position="bottom">
    <van-picker
      title="选择毛笔颜色"
      :columns="colorColumns"
      @confirm="onConfirmColor"
    />
  </van-popup>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import SignaturePad from "signature_pad";
import { Toast } from "vant";
import * as FileSaver from "file-saver";

export default defineComponent({
  name: "App",

  setup() {
    const wordRef = ref<HTMLElement>();
    const paintRef = ref<HTMLCanvasElement>();
    let signaturePad: SignaturePad;
    const words = ref<Array<string>>("".split(""));
    const index = ref<number>(0);
    let imgs = Array(words.value.length).fill("");

    const isPreview = ref(false);
    const previewImgs = ref<Array<string>>([]);

    const isDialog = ref(false);
    const inputValue = ref<string>();

    const isSelect = ref(false);
    const selectValue = ref();
    const selectOptions = [
      {
        text: "李白",
        value: "1",
        children: [
          {
            text: "早发白帝城",
            value:
              "朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。",
          },
          {
            text: "黄鹤楼送孟浩然之广陵",
            value:
              "故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。",
          },
          {
            text: "静夜思",
            value: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
          },
          {
            text: "赠汪伦",
            value:
              "李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情",
          },
          {
            text: "望庐山瀑布",
            value:
              "日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。",
          },
        ],
      },
      {
        text: "杜甫",
        value: "2",
        children: [
          {
            text: "望岳",
            value:
              "岱宗夫如何?齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。",
          },
          {
            text: "绝句",
            value:
              "两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。",
          },
          {
            text: "春夜喜雨",
            value: "好雨知时节，当春乃发生。随风潜入夜，润物细无声。",
          },
        ],
      },
    ];

    function onSelect() {
      isSelect.value = false;

      words.value = selectValue.value.split("");
      index.value = 0;
      imgs = Array(words.value.length).fill("");
      selectValue.value = "";
      onClear();
    }

    function onCloseSelect() {
      isSelect.value = true;
    }

    function toSelectWord() {
      isSelect.value = true;
    }

    function resizeCanvas() {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      paintRef.value!.width = paintRef.value!.offsetWidth * ratio;
      paintRef.value!.height = paintRef.value!.offsetHeight * ratio;
      paintRef.value!.getContext("2d")?.scale(ratio, ratio);
      signaturePad!.clear();
    }

    onMounted(() => {
      signaturePad = new SignaturePad(paintRef.value!, {
        minWidth: 6,
        maxWidth: 16,
      });

      resizeCanvas();

      window.onresize = () => resizeCanvas();
    });

    function onWord(i: number) {
      if (i !== index.value) {
        _saveImg();
        onClear();
        index.value = i;
      }
    }

    function onLast() {
      _saveImg();
      if (index.value > 0) {
        index.value--;
        onClear();
        if (wordRef.value) {
          wordRef.value.scrollLeft = wordRef.value.scrollLeft - 48;
        }
      }
    }

    function onNext() {
      _saveImg();
      if (index.value < words.value.length - 1) {
        index.value++;
        onClear();
        if (wordRef.value) {
          wordRef.value.scrollLeft = wordRef.value.scrollLeft + 48;
        }
      }
    }

    function onClear() {
      signaturePad.clear();
    }

    function onCreateImg() {
      _saveImg();

      let count = words.value.length;

      const canvas = document.createElement("canvas");
      canvas.width = 200 * (count >= 8 ? 8 : count);
      canvas.height = 200 * Math.ceil(count / 8);
      const ctx = canvas.getContext("2d");

      ctx!.fillStyle = "#fff";
      ctx!.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < imgs.length; i++) {
        const base64 = imgs[i];
        if (base64) {
          const image = new Image();
          image.onload = function () {
            ctx!.drawImage(
              image,
              (i % 8) * 200,
              Math.floor(i / 8) * 200,
              200,
              200
            );
            count--;

            if (count === 0) {
              isPreview.value = true;
              previewImgs.value = [canvas.toDataURL()];
            }
          };
          image.src = base64;
        } else {
          count--;

          if (count === 0) {
            isPreview.value = true;
            previewImgs.value = [canvas.toDataURL()];
          }
        }
      }
    }

    function _saveImg() {
      if (!signaturePad.isEmpty()) {
        imgs[index.value] = signaturePad.toDataURL();
      }
    }

    function onInputWord() {
      isDialog.value = true;
    }

    function onConfirmInputWord() {
      if (inputValue.value) {
        isDialog.value = false;
        words.value = inputValue.value.split("");
        index.value = 0;
        imgs = Array(words.value.length).fill("");
        inputValue.value = "";
        onClear();
      } else {
        Toast("请录入字帖");
        return false;
      }
    }

    function onCancelInputWord() {
      inputValue.value = "";
    }

    const widthColumns = [2, 4, 6, 8, 10];
    const isWidth = ref(false);

    function toSelectWidth() {
      isWidth.value = true;
    }

    function onConfirmWidth(w: number) {
      isWidth.value = false;
      signaturePad.minWidth = w;
      signaturePad.maxWidth = w + 10;
    }

    const colorColumns = ["黑色", "红色", "绿色", "蓝色"];
    const isColor = ref(false);

    function toSelectColor() {
      isColor.value = true;
    }

    function onConfirmColor(c: string) {
      isColor.value = false;
      signaturePad.penColor =
        { 黑色: "#00", 红色: "#f00", 绿色: "#0f0", 蓝色: "#00f" }[c] || "#00";
    }

    function saveImgToLocal() {
      FileSaver.saveAs(previewImgs.value[0], `linmo-${+new Date()}.png`);
    }

    function toShareImg() {
      console.log(11);

      let mateArr = [
        "og:url",
        "https://tianma630.com/linmo/dist/index.html",
        "og:title",
        "临摹",
        "og:image",
        "https://img.zcool.cn/community/01bc7b56000a516ac7251df8ded6a4.JPG@1280w_1l_2o_100sh.jpg",
        "og:type",
        "website",
      ];
      window.open(
        "http://www.facebook.com/sharer.php?u=" +
          encodeURIComponent(
            `http://java.chendahai.cn/share/new?meta=${mateArr.toString()}`
          )
      );
    }

    return {
      wordRef,
      paintRef,
      words,
      index,
      onWord,
      onLast,
      onNext,
      onClear,
      onCreateImg,
      isPreview,
      previewImgs,
      onInputWord,
      isDialog,
      inputValue,
      onConfirmInputWord,
      onCancelInputWord,

      isSelect,
      selectValue,
      selectOptions,
      toSelectWord,
      onSelect,
      onCloseSelect,

      widthColumns,
      isWidth,
      toSelectWidth,
      onConfirmWidth,

      colorColumns,
      isColor,
      toSelectColor,
      onConfirmColor,

      saveImgToLocal,
      toShareImg,
    };
  },
});
</script>

<style lang="less">
@font-face {
  font-family: "maobi";
  src: url("./assets/maobi.ttf");
}
body {
  background-color: #f5f5f5;
}
.words {
  width: 355px;
  height: 44px;
  border-radius: 2px;
  background-color: #fff;
  box-sizing: border-box;
  margin: 20px auto;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  .word {
    display: inline-block;
    width: 40px;
    background-color: #fff;
    color: #aaa;
    font-size: 28px;
    margin: 2px;
    background-color: #e5e5e5;
    line-height: 40px;
    text-align: center;
    border-radius: 2px;
    transition: all 0.15s linear;
    &.active {
      background-color: #fff;
      color: #fb4e57;
    }
  }
}
.paints {
  width: 355px;
  height: 355px;
  margin: auto;
  border: 1px solid #fb4e57;
  position: relative;
  box-sizing: border-box;
  margin-top: 20px;
  .slash1 {
    width: 355px;
    height: 0;
    border-bottom: 1px dashed #fb4e57;
    position: absolute;
    top: 177px;
  }
  .slash2 {
    width: 0;
    height: 355px;
    border-left: 1px dashed #fb4e57;
    position: absolute;
    left: 177px;
  }
  .slash3 {
    width: 0;
    height: 501px;
    border-left: 1px dashed #fb4e57;
    position: absolute;
    left: 177px;
    top: -74px;
    transform: rotateZ(45deg);
  }
  .slash4 {
    width: 0;
    height: 501px;
    border-left: 1px dashed #fb4e57;
    position: absolute;
    left: 177px;
    top: -74px;
    transform: rotateZ(-45deg);
  }
  .text {
    width: 355px;
    line-height: 355px;
    font-size: 300px;
    color: #e5e5e5;
    font-family: "maobi", "楷体", "楷体_GB2313";
    text-align: center;
  }
  canvas {
    width: 355px;
    height: 355px;
    position: absolute;
    top: 0;
  }
}
.btns {
  width: 355px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  border: 1px solid #f1f1f1;
  border-right: 0;
  margin: 20px auto;
  .btn {
    width: 25%;
    height: 40px;
    background-color: #fff;
    color: #a6a9ab;
    font-size: 16px;
    border-right: 1px solid #f1f1f1;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 24px;
      height: 24px;
    }
    &.last img {
      transform: rotateZ(90deg);
    }
    &.next img {
      transform: rotateZ(-90deg);
    }
    &:active {
      opacity: 0.6;
    }
    &:nth-child(n + 5) {
      border-top: 1px solid #f1f1f1;
    }
  }
}

.save {
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 32px;
  right: 0;
}
</style>
