
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, MapPin, Users } from "lucide-react";
import type { Vendor } from "@/types/vendor";

const fetchVideographers = async () => {
  const { data, error } = await supabase
    .from('vendors')
    .select(`
      *,
      vendor_services!inner(service_type)
    `)
    .eq('vendor_services.service_type', 'videographer');
  
  if (error) throw error;
  return data as Vendor[];
};

const VendorCard = ({ vendor }: { vendor: Vendor }) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={vendor.featured_image_url} 
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {vendor.is_featured && (
          <Badge className="absolute top-4 right-4 bg-primary" variant="default">
            Featured
          </Badge>
        )}
      </div>
      <CardHeader className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">{vendor.name}</h3>
            <p className="text-muted-foreground">Videographer</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{vendor.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
          <div>
            <p className="font-medium">{vendor.base_location}</p>
            <p className="text-sm text-muted-foreground">
              {vendor.travel_fee_details}
            </p>
          </div>
        </div>
        
        <div>
          <p className="font-medium mb-2">Price Range</p>
          <p className="text-muted-foreground">{vendor.price_range}</p>
        </div>

        <div>
          <p className="font-medium mb-2">Style</p>
          <div className="flex flex-wrap gap-2">
            {vendor.style_tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>

        {vendor.second_shooter_option && (
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4" />
            <span>Second shooter available</span>
          </div>
        )}

        <div>
          <p className="font-medium mb-2">Cultural Experience</p>
          <div className="flex flex-wrap gap-2">
            {vendor.cultural_experience.map((culture) => (
              <Badge key={culture} variant="outline">{culture}</Badge>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground">{vendor.description}</p>
      </CardContent>
    </Card>
  );
};

const Videographers = () => {
  const { data: vendors, isLoading, error } = useQuery({
    queryKey: ['videographers'],
    queryFn: fetchVideographers,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <p>Loading videographers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <p className="text-red-500">Error loading videographers</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Wedding Videographers</h1>
          <p className="text-muted-foreground">
            Find the perfect videographer to capture your special day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors?.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videographers;
