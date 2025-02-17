
export type Vendor = {
  id: string;
  name: string;
  vendor_type: string;
  coverage_type: string;
  style_tags: string[];
  price_range: string;
  base_location: string;
  travel_fee_details: string;
  rating: number;
  second_shooter_option: boolean;
  description: string;
  featured_image_url: string;
  is_featured: boolean;
  cultural_experience: string[];
  travel_to_venue: boolean;
  gallery?: VendorGallery[];
  videos?: VendorVideo[];
};

export type VendorGallery = {
  id: string;
  vendor_id: string;
  image_url: string;
  sort_order: number;
  created_at: string;
};

export type VendorVideo = {
  id: string;
  vendor_id: string;
  youtube_url: string;
  title: string | null;
  created_at: string;
};
