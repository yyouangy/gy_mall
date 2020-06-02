import { debounce } from './utils.js';
import BackTop from "components/content/backTop/BackTop"

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
            refresh: null
        }
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 200)
        this.itemImgListener = () => {
            this.refresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListener)
    }
}



export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backtClick() {
            this.$refs.scroll.scrollTo(0, 0, 1000)
        }
    }
}