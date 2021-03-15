
import { NoShadowMixin } from './no-shadow.mixin';
import { connect } from 'pwa-helpers';
import { store } from '../redux/store';
import { LitElement } from 'lit-element';

export const ComponentMixin = <T extends new (...args: any[]) => LitElement>(base: T) => {
  class ComponentMixin extends connect(store)(NoShadowMixin(base)) {

    createRenderRoot() {
      return this;
    }

  }
  return ComponentMixin;
};