import {VNode} from 'vue';
import {NativeElements, InnerElements} from 'vue-hooks-env';

declare global {

    namespace JSX {

        interface Element extends VNode {
        }

        interface IntrinsicElements extends NativeElements, InnerElements {
        }
    }
}
