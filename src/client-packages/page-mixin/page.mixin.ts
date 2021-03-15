import { NoShadowMixin } from '../no-shadow/noshadow.mixin';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { LitElement } from 'lit-element';

export const PageMixin = <T extends new (...args: any[]) => LitElement>(base: T, noShadow = true) => {
  class PageMixin extends connect(store)(noShadow ? NoShadowMixin(base) : base) {

    createRenderRoot() {
      return this;
    }

  }
  return PageMixin;
};
