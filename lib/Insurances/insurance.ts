export interface Insurance {
  uuid: string;
  carrier_association: string;
  carrier_brand: string;
  carrier_name: string;
  state: string | null;
  plan_name: string;
  plan_type: string | null;
  metal_level: string | null;
  display_name: string;
  network: string | null;
  confidence: number;
  category?: string;
  codes?: string[];
}
