import { ServerType } from '../../../network/types';
import { IFileSystem } from '../../../filesystem';
import { Process, ProcessEvent, ProcessState, ProcessType } from '../../base';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
import variant from "@jitl/quickjs-singlefile-browser-release-asyncify"
import { HTTPModule } from './modules/http';
import { HostRequest, NetworkModule, statusCodeToStatusText } from './modules/network-module';
import {  QuickJSContext, QuickJSHandle, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import { NetworkManager } from '../../../network/manager';
// import variant from "@jitl/quickjs-singlefile-browser-release-sync"
// import variant from "@jitl/quickjs-asmjs-mjs-release-sync"
