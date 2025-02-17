
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
  const images = vendor.gallery || [{ image_url: vendor.featured_image_url }];

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
              {vendor.travel_to_venue && (
                <Badge variant="outline" className="ml-2">Travels to venue</Badge>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Style</p>
            <div className="flex flex-wrap gap-2">
              {vendor.style_tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
