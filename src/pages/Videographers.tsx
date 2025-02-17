import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
    <Link to={`/videographers/${vendor.id}`}>
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
          <div>
            <h3 className="text-2xl font-bold">{vendor.name}</h3>
            <p className="text-muted-foreground">{vendor.base_location}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {vendor.style_tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
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
