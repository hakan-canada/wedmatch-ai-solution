
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, ArrowLeft } from "lucide-react";
import type { Vendor } from "@/types/vendor";

const fetchVendor = async (id: string) => {
  const { data, error } = await supabase
    .from('vendors')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data as Vendor;
};

const VendorDetail = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();
  
  const { data: vendor, isLoading, error } = useQuery({
    queryKey: ['vendor', id],
    queryFn: () => fetchVendor(id!),
    enabled: !!id,
  });

  if (isLoading) return <div className="container mx-auto px-4 py-16">Loading...</div>;
  if (error || !vendor) return <div className="container mx-auto px-4 py-16">Vendor not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate(`/${type}`)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {type}
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
              <img 
                src={vendor.featured_image_url} 
                alt={vendor.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h1 className="text-4xl font-bold">{vendor.name}</h1>
                <div className="mt-2 flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{vendor.rating}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">{vendor.base_location}</p>
                  <p className="text-muted-foreground">{vendor.travel_fee_details}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Price Range</h3>
                <p>{vendor.price_range}</p>
              </div>

              {vendor.second_shooter_option && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Second shooter available</span>
                </div>
              )}

              <div>
                <h3 className="font-semibold mb-2">Style</h3>
                <div className="flex flex-wrap gap-2">
                  {vendor.style_tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Cultural Experience</h3>
                <div className="flex flex-wrap gap-2">
                  {vendor.cultural_experience.map((culture) => (
                    <Badge key={culture} variant="outline">{culture}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-muted-foreground">{vendor.description}</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm h-fit sticky top-8">
            <h2 className="text-2xl font-bold mb-6">Contact {vendor.name}</h2>
            <form 
              name="vendor-contact" 
              method="POST" 
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="vendor-contact" />
              <input type="hidden" name="vendor-id" value={vendor.id} />
              <input type="hidden" name="vendor-name" value={vendor.name} />
              
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="event-date">
                  Event Date
                </label>
                <input
                  type="date"
                  id="event-date"
                  name="event-date"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full p-2 border rounded-md"
                ></textarea>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetail;
