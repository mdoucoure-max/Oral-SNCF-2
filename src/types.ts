export interface SourceItem {
  id: number;
  author: string;
  title: string;
  publication: string;
  date: string;
  url: string;
  year?: number;
  commercial?: boolean;
  estimation?: boolean;
  isRecentTNI?: boolean;
  type?: 'presse' | 'rapport' | 'entreprise' | 'technique';
  notes?: string;
}

export type SprintTab = 'accueil' | 'schema' | 'tni' | 'cloud' | 'edge' | 'donnees-ia' | 'sources';
