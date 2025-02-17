
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Vendor } from "@/types/vendor";
import { VendorCard } from "@/components/VendorCard";

const fetchPhotographers = async () => {
  const { data, error } = await supabase
    .from('vendors')
    .select(`
      *,
      vendor_services!inner(service_type),
      gallery:vendor_gallery(*)
    `)
    .eq('vendor_services.service_type', 'photographer')
    .order('is_featured', { ascending: false });
  
  if (error) throw error;
  return data as Vendor[];
};

const Photographers = () => {
  const { data: vendors, isLoading, error } = useQuery({
    queryKey: ['photographers'],
    queryFn: fetchPhotographers,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <p>Loading photographers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <p className="text-red-500">Error loading photographers</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Wedding Photographers</h1>
          <p className="text-muted-foreground">
            Find the perfect photographer to capture your special day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors?.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} type="photographers" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photographers;
