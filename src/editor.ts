/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  LitElement,
  html,
  TemplateResult,
  css,
  CSSResultGroup,
} from 'lit';
import { customElement, property, state } from 'lit/decorators';
import {
  HomeAssistant,
  LovelaceCardEditor,
} from 'custom-card-helpers';

import type { DirektiveComponentConfig } from './types';

@customElement('direktive-ha-lovelace-editor')
export class DirektiveComponentEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: DirektiveComponentConfig;

  public setConfig(config: DirektiveComponentConfig): void {
    this._config = config;
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-form {
        padding: 16px;
      }
    `;
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <ha-form
        .data=${this._config}
        .schema=${[
          {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: true,
          },
          {
            type: 'string',
            name: 'entity',
            label: 'Entity',
            required: true,
          },
        ]}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value;
    if (!config) {
      return;
    }
    this._config = config;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config } }));
  }
}
