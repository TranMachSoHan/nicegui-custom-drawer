export default {
  template: `
      <q-layout>
        <q-drawer
          v-model="drawer"
          show-if-above
          @mousedown="mouseDown"
          @mouseup="mouseUp"
          @mousemove="mouseMove"
          bordered
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
          :style="{cursor: cursor, width: width}"
        >
          <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
            <q-list padding>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>

                <q-item-section>
                  Inbox
                </q-item-section>
              </q-item>

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>

                <q-item-section>
                  Star
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>

                <q-item-section>
                  Send
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="drafts" />
                </q-item-section>

                <q-item-section>
                  Drafts
                </q-item-section>
              </q-item>
            </q-list>
            
          </q-scroll-area>
        </q-drawer>
        <q-page-container>
          <q-page padding>
            <p v-for="n in 5" :key="n">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
            </p>
          </q-page>
      </q-page-container>
      </q-layout>
  `,
  data() {
    return {
      drawer: True,
      clientXTmp: 0,
      cursor: "grab",
      isMouseMove: False,
    };
  },
  methods: {
    mouseDown(e) {
      e.preventDefault();
      if (!this.isMouseMove){
        this.isMouseMove = True;
        this.clientXTmp = e.clientX;
      }
    },
    mouseUp(e) {
      e.preventDefault();
      this.isMouseMove = False;
    },
    mouseMove(e) {
      e.preventDefault();
      for (var element of document.getElementsByClassName("q-drawer")){
        this.cursor = (element.offsetWidth - (e.clientX - element.offsetLeft) <= 5 ) ? 
                       "ew-resize" : "grab";
        if (this.isMouseMove && this.cursor == "ew-resize"){
          var clientXDiff = e.clientX - this.clientXTmp;
          console.log("element.offsetWidth" + "---" + clientXDiff);
          element.style.width = ((element.offsetWidth + clientXDiff < 50) ?
                                 50 : element.offsetWidth + clientXDiff) + "px";
          this.clientXTmp = e.clientX;
        }
        else if (this.isMouseMove && this.cursor == "grab"){
          var clientXDiff = e.clientX - this.clientXTmp;
          element.style.left = ((element.offsetLeft + clientXDiff < 0) ?
                                0 : element.offsetLeft + clientXDiff) + "px";
          this.clientXTmp = e.clientX;
        }
      }
    },
    toggle(){
      this.drawer = !this.drawer;
      this.resetDrawer()
    },
    resetDrawer(){
      for (var element of document.getElementsByClassName("q-drawer")){
        element.style.left = "0px";
        element.style.width = this.width + "px";
      }
    }
  },
  props: {
    width: Number,
    drawer: Boolean
  },
};
