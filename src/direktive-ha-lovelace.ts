/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  TemplateResult,
  css,
  PropertyValues,
  CSSResultGroup,
} from 'lit';
import { state } from "lit/decorators";
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  LovelaceCardEditor,
} from 'custom-card-helpers';
import { CARD_VERSION } from './constants';
import './editor';
import './direktive-ha-lovelace-dialog';
import { DirektiveDialog } from './direktive-ha-lovelace-dialog';

import type { DirektiveComponentConfig, Directive } from './types';


/* eslint no-console: 0 */
console.info(
  `%c  DIREKTIVE-HA-LOVELACE \n%c  version: ${CARD_VERSION}  `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'direktive-ha-lovelace',
  name: 'Direktive.ai Lovelace Component',
  description: 'A custom card for managing directives',
});

export class DirektiveComponent extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('direktive-ha-lovelace-editor');
  }

  public static getStubConfig(): Record<string, unknown> {
    return {};
  }

  @state() public hass!: HomeAssistant;
  @state() private config!: DirektiveComponentConfig;
  @state() private directives: Directive[] = [];
  private dialog: DirektiveDialog | null = null;
  public setConfig(config: DirektiveComponentConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }

    this.config = {
      ...config,
      name: 'Direktive.ai Lovelace Component',
      entity: 'sensor.direktive_sensor',
    };
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }
    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  private _showWarning(warning: string): TemplateResult {
    return html`
      <hui-warning>${warning}</hui-warning>
    `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card');
    errorCard.setConfig({
      type: 'error',
      error,
      origConfig: this.config,
    });

    return html`
      ${errorCard}
    `;
  }

  private _getStatus(): { total: number; success: number; warning: number } {
    return this.directives.reduce(
      (counts, directive) => {
        counts[directive.status]++;
        counts.total++;
        return counts;
      },
      { total: 0, success: 0, warning: 0 }
    );
  }

  private _openDialog(): void {
    this.dialog = new DirektiveDialog();
    this.dialog.setConfig(
      this.hass,
      this.directives
    );
    this.dialog.show();
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        --spacing: 12px;
      }
      .type-custom-direktive-ha-lovelace {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: var(--spacing);
        display: flex;
        flex-direction: column;
        justify-content: var(--layout-align);
        height: auto;
        cursor: pointer;
      }
      .direktive-ha-lovelace {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
      .status-icon {
        margin-right: var(--spacing);
      }
      .status-text {
        min-width: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 16px;
      }
      .status-text-total {
        font-weight: var(--card-primary-font-weight);
        font-size: var(--card-primary-font-size);
        line-height: var(--card-primary-line-height);
        color: var(--primary-text-color);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .status-text-subtitle {
        font-weight: var(--card-secondary-font-weight);
        font-size: var(--card-secondary-font-size);
        line-height: var(--card-secondary-line-height);
        color: var(--secondary-text-color);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .status-success {
        color: var(--success-color);
      }
      .status-warning {
        color: var(--warning-color);
      }
    `;
  }

  private _updateDirectivesFromSensor(): void {
    const sensor = this.hass.states[this.config.entity];
    console.log("sensor", sensor);
    if (sensor && sensor.attributes.directives) {
      this.directives = sensor.attributes.directives;

      if (this.dialog) {
        this.dialog.setConfig(
          this.hass,
          this.directives
        );
      }
    }
  }

  protected firstUpdated(): void {
    this._updateDirectivesFromSensor();
  }

  protected render(): TemplateResult | void {
    if (this.config.show_warning) {
      return this._showWarning('warning message');
    }

    if (this.config.show_error) {
      return this._showError('error message');
    }

    this._updateDirectivesFromSensor();
    
    const status = this._getStatus();
    
    return html`
      <ha-card
        @click=${() => this._openDialog()}
        tabindex="0"
      >
        <div class='direktive-ha-lovelace'>
          <div class="status-icon">
            ${status.warning > 0 
              ? html`<ha-icon icon="mdi:alert-circle" class="status-warning"></ha-icon>` 
              : html`<ha-icon icon="mdi:alpha-d-circle"></ha-icon>`
            }
          </div>
          <div class="status-text">
            <div class="status-text-total">
              You have a total of ${status.total} directives
            </div>
            <div class="status-text-subtitle">
              ${status.warning > 0 
                ? html`<i>You have <span>${status.warning}</span> warnings</i>`
                : html`<i>You have no warnings</i>`
              }
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }
}

customElements.define("direktive-ha-lovelace", DirektiveComponent);
