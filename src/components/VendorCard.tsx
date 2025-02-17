
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import type { Vendor } from "@/types/vendor";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type VendorCardProps = {
  vendor: Vendor;
  type: 'photographers' | 'videographers';
};

export const VendorCard = ({ vendor, type }: VendorCardProps) => {
  // Create a gallery array with sample images if no gallery exists
  const images = vendor.gallery || [
    { 
      id: '1',
      vendor_id: vendor.id,
      image_url: vendor.featured_image_url || 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
      sort_order: 0,
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      vendor_id: vendor.id,
      image_url: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      sort_order: 1,
      created_at: new Date().toISOString()
    },
    {
      id: '3',
      vendor_id: vendor.id,
      image_url: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      sort_order: 2,
      created_at: new Date().toISOString()
    }
  ];

  return (
    <Link to={`/${type}/${vendor.id}`}>
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={image.image_url} 
                      alt={`${vendor.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
          {vendor.is_featured && (
            <Badge className="absolute top-4 right-4 z-10 bg-primary" variant="default">
              Featured
            </Badge>
          )}
        </div>
        
        <CardHeader className="space-y-2">
          <div>
            <h3 className="text-2xl font-bold">{vendor.name}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{vendor.base_location}</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            {vendor.travel_to_venue && (
              <div className="mb-4">
                <Badge variant="outline">Travels to venue</Badge>
              </div>
            )}
            <p className="text-sm font-medium text-muted-foreground mb-2">Cultural Experience</p>
            <div className="flex flex-wrap gap-2">
              {vendor.cultural_experience.slice(0, 3).map((culture) => (
                <Badge key={culture} variant="secondary">{culture}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
