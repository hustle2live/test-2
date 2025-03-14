export type BookData = {
   id: string;
   title: string;
   author: string;
   category_name: string;
   ISBN: string;
   created_at: string;
   updated_at: string | null;
   isActive: boolean;
};

export enum ShowFilterType {
   Active = 'active',
   Deactivated = 'deactivated',
   All = 'all'
}
