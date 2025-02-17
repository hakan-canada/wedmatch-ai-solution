
export type Vendor = {
  id: string;
  name: string;
  vendor_type: string;
  coverage_type: string;
  style_tags: string[];
  price_range: string;
  base_location: string;
  travel_included_radius: number;
  travel_fee_details: string;
  rating: number;
  reviews_count: number;
  second_shooter_option: boolean;
  description: string;
  featured_image_url: string;
  is_featured: boolean;
  cultural_experience: string[];
};
