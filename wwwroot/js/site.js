// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
import Vue from 'vue';
import vueCustomElement from 'vue-custom-element'
import helloWorld from './components/helloworld'

Vue.use(vueCustomElement);

Vue.customElement('hello-world', helloWorld);