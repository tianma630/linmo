<template>
  <section class="words" v-if="words.length > 0" ref="wordRef">
    <span
      :class="[
        'word',
        {
          writen: wordState.writens[i],
          active: i === wordState.index,
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
    <div
      class="text"
      :style="{
        'font-family': font,
      }"
    >
      {{ words[wordState.index] || "&nbsp;" }}
    </div>
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
    <!-- <div class="btn" @click="onInputWord">录入字帖</div> -->
    <div class="btn" @click="toSelectWord">选择字帖</div>
    <div class="btn" @click="toSelectFont">切换字体</div>
    <div class="btn" @click="toSelectColor">毛笔颜色</div>
    <div class="btn" @click="toAutoJump">自动跳转</div>
    <div class="btn" @click="onCreateImg">生成图片</div>
  </section>

  <van-image-preview
    v-model:show="isPreview"
    :images="previewImgs"
    :showIndex="false"
    :closeable="true"
  >
    <template v-slot:cover>
      <div class="save">
        <van-button @click="toAddSign">添加签名</van-button>
        <van-button @click="saveImgToLocal" style="margin-left: 8px"
          >保存图片</van-button
        >
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
      title="选择字体宽度"
      :columns="widthColumns"
      @confirm="onConfirmWidth"
      @cancel="onCancelWidth"
    />
  </van-popup>

  <van-popup v-model:show="isFont" round position="bottom">
    <van-picker
      title="选择字体"
      :columns="fontColumns"
      @confirm="onConfirmFont"
      @cancel="onCancelFont"
    />
  </van-popup>

  <van-popup v-model:show="isColor" round position="bottom">
    <van-picker
      title="选择毛笔颜色"
      :columns="colorColumns"
      @confirm="onConfirmColor"
      @cancel="onCancelColor"
    />
  </van-popup>

  <van-dialog
    v-model:show="isSign"
    title="添加签名"
    show-cancel-button
    @confirm="onAddSign"
    @cancel="onCancelSign"
  >
    <van-cell-group inset>
      <van-field
        v-model="signValue"
        autosize
        label="签名"
        type="text"
        placeholder="请输入您的姓名"
      />
    </van-cell-group>
  </van-dialog>

  <van-popup v-model:show="isAutoJump" round position="bottom">
    <van-picker
      title="自动跳转下一字"
      :columns="jumpColumns"
      @confirm="onAutoJump"
      @cancel="onCancelAutoJump"
    />
  </van-popup>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
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
    const wordState = reactive({
      index: 0,
      writens: Array(words.value.length).fill(false),
    });
    let imgs = Array(words.value.length).fill("");

    const isPreview = ref(false);
    const previewImgs = ref<Array<string>>([]);

    const isDialog = ref(false);
    const inputValue = ref<string>();

    const isSelect = ref(false);
    const selectValue = ref();
    const selectOptions = ref([
      {
        text: "般若波羅蜜多心經",
        value: 1,
        children: [
          {
            text: "节一",
            value:
              "觀自在菩薩。行深般若波羅蜜多時。照見五蘊皆空。度一切苦厄。舍利子。色不異空。空不異色。色即是空。空即是色。受想行識。亦復如是。舍利子。是諸法空相。不生不滅。不垢不淨。不增不減。是故空中無色。",
          },
          {
            text: "节二",
            value:
              "無受想行識。無眼耳鼻舌身意。無色聲香味觸法。無眼界。乃至無意識界。無無明。亦無無明盡。乃至無老死。亦無老死盡。無苦集滅道。無智亦無得。以無所得故。菩提薩埵。依般若波羅蜜多故。心無罣礙。無罣礙故。無有恐怖。",
          },
          {
            text: "节三",
            value:
              "遠離顛倒夢想。究竟涅槃。三世諸佛。依般若波羅蜜多故。得阿耨多羅三藐三菩提。故知般若波羅蜜多。是大神咒。是大明咒。是無上咒。是無等等咒。能除一切苦。真實不虛。故說般若波羅蜜多咒。即說咒曰。揭諦揭諦。波羅揭諦。波羅僧揭諦。菩提薩婆訶。",
          },
        ],
      },
    ]);

    const isSign = ref(false);
    const signValue = ref<string>();

    let isWriting = false;
    let period = 0;
    let timer = 0;

    fetch("/data.json")
      .then((res) => res.json())
      .then((d) => {
        let i = 0;
        selectOptions.value = d.map((item: any) => ({
          ...item,
          value: ++i,
        }));
      });

    function onSelect() {
      isSelect.value = false;

      words.value = selectValue.value.split("");
      wordState.index = 0;
      imgs = Array(words.value.length).fill("");
      wordState.writens = Array(words.value.length).fill(false);
      selectValue.value = "";
      onClear();
      if (wordRef.value) {
        wordRef.value.scrollLeft = 0;
      }
      wordState.writens[wordState.index] = true;
      isWriting = false;
      clearTimeout(timer);
    }

    function onCloseSelect() {
      isSelect.value = false;
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

      paintRef.value!.addEventListener("pointerdown", () => {
        autorun();
      });

      setTimeout(() => {
        resizeCanvas();
        window.onresize = () => resizeCanvas();
      }, 100);
    });

    function autorun() {
      if (
        !isWriting &&
        period > 0 &&
        wordState.index < words.value.length - 1
      ) {
        isWriting = true;
        timer = setTimeout(() => {
          isWriting = false;
          _saveImg();

          wordState.index++;
          wordState.writens[wordState.index] = true;
          onClear();
          if (wordRef.value) {
            wordRef.value.scrollLeft = Math.max(wordState.index * 48 - 170, 0);
          }
        }, period * 1000);
      }
    }

    function onWord(i: number) {
      if (i !== wordState.index) {
        clearTimeout(timer);
        isWriting = false;
        _saveImg();
        onClear();
        wordState.index = i;
        wordState.writens[wordState.index] = true;
        if (wordRef.value) {
          wordRef.value.scrollLeft = Math.max(wordState.index * 48 - 170, 0);
        }
      }
    }

    function onLast() {
      _saveImg();
      if (wordState.index > 0) {
        clearTimeout(timer);
        isWriting = false;
        wordState.index--;
        wordState.writens[wordState.index] = true;
        onClear();
        if (wordRef.value) {
          wordRef.value.scrollLeft = Math.max(wordState.index * 48 - 170, 0);
        }
      }
    }

    function onNext() {
      clearTimeout(timer);
      _saveImg();
      if (wordState.index < words.value.length - 1) {
        clearTimeout(timer);
        isWriting = false;
        wordState.index++;
        wordState.writens[wordState.index] = true;
        onClear();
        if (wordRef.value) {
          wordRef.value.scrollLeft = Math.max(wordState.index * 48 - 170, 0);
        }
      }
    }

    function onClear() {
      signaturePad.clear();
    }

    function onCreateImg() {
      _saveImg();
      _createImg();
    }

    function _saveImg() {
      if (!signaturePad.isEmpty()) {
        imgs[wordState.index] = signaturePad.toDataURL();
      }
    }

    function _createImg(sign?: string) {
      let count = words.value.length;

      const canvas = document.createElement("canvas");
      canvas.width = 200 * (count >= 8 ? 8 : count);
      canvas.height = 200 * Math.ceil(count / 8);
      const ctx = canvas.getContext("2d");

      if (sign) {
        canvas.height += 200;
      }

      ctx!.fillStyle = "#fff";
      ctx!.fillRect(0, 0, canvas.width, canvas.height);

      if (sign) {
        ctx!.font = "100px " + font.value;
        ctx!.fillStyle = signaturePad.penColor;
        ctx!.fillText(
          sign + " 沐手恭书",
          canvas.width - sign.length * 100 - 480,
          canvas.height - 80
        );
      }

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

    function onInputWord() {
      isDialog.value = true;
    }

    function onConfirmInputWord() {
      if (inputValue.value) {
        isDialog.value = false;
        words.value = inputValue.value.split("");
        wordState.index = 0;
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

    const widthColumns = ["楷体", "隶书", "硬笔"];
    const isWidth = ref(false);

    function toSelectWidth() {
      isWidth.value = true;
    }

    function onCancelWidth() {
      isWidth.value = false;
    }

    function onConfirmWidth(w: number) {
      isWidth.value = false;
      signaturePad.minWidth = w;
      signaturePad.maxWidth = w + 10;
    }

    const font = ref<string>("kaiti");
    const isFont = ref(false);
    const fontColumns = ["楷体", "隶书", "硬笔"];
    function toSelectFont() {
      isFont.value = true;
    }
    function onCancelFont() {
      isFont.value = false;
    }
    function onConfirmFont(v: string) {
      font.value = { 楷体: "kaiti", 隶书: "lishu", 硬笔: "yingbi" }[v] || "";
      isFont.value = false;
    }

    const colorColumns = ["黑色", "红色"];
    const isColor = ref(false);

    function toSelectColor() {
      isColor.value = true;
    }

    function onCancelColor() {
      isColor.value = false;
    }

    function onConfirmColor(c: string) {
      isColor.value = false;
      signaturePad.penColor = { 黑色: "#00", 红色: "#f00" }[c] || "#00";
    }

    function toAddSign() {
      isSign.value = true;
      signValue.value = "";
    }

    function onAddSign() {
      _createImg(signValue.value);
    }

    function onCancelSign() {
      isSign.value = false;
    }

    function saveImgToLocal() {
      FileSaver.saveAs(previewImgs.value[0], `linmo-${+new Date()}.png`);
    }

    function toShareImg() {
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

    const isAutoJump = ref(false);
    const jumpColumns = ["手动", "1秒", "2秒", "3秒", "4秒", "5秒"];
    function toAutoJump() {
      isAutoJump.value = true;
    }
    function onCancelAutoJump() {
      isAutoJump.value = false;
    }
    function onAutoJump(v: string) {
      period =
        { 手动: 0, "1秒": 1, "2秒": 2, "3秒": 3, "4秒": 4, "5秒": 5 }[v] || 0;
      isAutoJump.value = false;
    }

    return {
      wordRef,
      paintRef,
      words,
      wordState,
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
      onCancelWidth,
      onConfirmWidth,

      colorColumns,
      isColor,
      toSelectColor,
      onCancelColor,
      onConfirmColor,

      isSign,
      signValue,
      toAddSign,
      onAddSign,
      onCancelSign,
      saveImgToLocal,
      toShareImg,

      font,
      isFont,
      fontColumns,
      toSelectFont,
      onCancelFont,
      onConfirmFont,

      isAutoJump,
      jumpColumns,
      toAutoJump,
      onCancelAutoJump,
      onAutoJump,
    };
  },
});
</script>

<style lang="less">
@font-face {
  font-family: "kaiti";
  src: url("./assets/kaiti.ttf");
}
@font-face {
  font-family: "lishu";
  src: url("./assets/lishu.ttf");
}
@font-face {
  font-family: "yingbi";
  src: url("./assets/yingbi.ttf");
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
    color: #bbb;
    font-size: 28px;
    margin: 2px;
    background-color: #e5e5e5;
    line-height: 40px;
    text-align: center;
    border-radius: 2px;
    transition: all 0.15s linear;
    &.writen {
      color: #99cc66;
    }
    &.active {
      background-color: #fff;
      color: #ff6666;
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
    // font-family: "kaiti";
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
