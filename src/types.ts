import { LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'direktive-ha-lovelace-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export interface DirektiveComponentConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  entity: string;
}

export interface Directive {
  id: string;
  message: string;
  title: string;
  summary: string;
  status: 'success' | 'creating' | 'updating' | 'error' | 'deleting' | 'downloading';
  created_at: string;
  creation_stage?: string;
  creation_message?: string;
  active: boolean;
  discovery: boolean;
  follow_up: string | null;
  review_summary: string | null;
  messages?: Array<{
    role: 'user' | 'assistant';
    content: {
      type?: string;
      answer?: string;
      request?: any;
      updated_directive?: string;
      created_at?: string;
      user_prompt?: string;
    };
    created_at: string;
  }>;
}
