import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { Camera, Video } from "lucide-react";
const photographyStyles = [{
  title: "Traditional Photography",
  image: "https://images.unsplash.com/photo-1519741497674-611481863552",
  description: "Features classic, posed shots emphasizing key moments and group portraits.",
  idealFor: "Couples desiring timeless images and a structured approach."
}, {
  title: "Photojournalistic Photography",
  image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
  description: "Captures candid, spontaneous moments to tell a genuine story of the day.",
  idealFor: "Those preferring natural, unposed photographs."
}, {
  title: "Editorial Photography",
  image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  description: "Styled to resemble magazine spreads with dramatic poses and lighting.",
  idealFor: "Couples wanting a glamorous, fashion-forward aesthetic."
}, {
  title: "Fine Art Photography",
  image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
  description: "Focuses on artistic composition and creativity, often with a soft, romantic feel.",
  idealFor: "Those looking for visually stunning and unique images."
}, {
  title: "Dark and Moody Photography",
  image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  description: "Utilizes deep tones and contrast to create dramatic, emotive images.",
  idealFor: "Couples drawn to a more intense and atmospheric look."
}];
const videographyStyles = [{
  title: "Cinematic Videography",
  image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
  description: "Employs filmmaking techniques to produce a movie-like experience with storytelling elements.",
  idealFor: "Couples wanting a dramatic and polished wedding film."
}, {
  title: "Documentary Videography",
  image: "https://images.unsplash.com/photo-1517137660927-cf53f0f65c44",
  description: "Records events as they happen in a straightforward, chronological manner.",
  idealFor: "Those preferring an authentic and unobtrusive capture of their day."
}, {
  title: "Traditional Videography",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  description: "Focuses on capturing the entire event with minimal editing, resembling a straightforward recording.",
  idealFor: "Couples who want a comprehensive record of their wedding."
}, {
  title: "Storytelling Videography",
  image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
  description: "Combines footage with elements like voiceovers and music to narrate the couple's unique story.",
  idealFor: "Those looking to highlight personal narratives and emotions."
}, {
  title: "Vintage Videography",
  image: "https://images.unsplash.com/photo-1532800783378-1bed60adaf58",
  description: "Uses effects like Super 8mm film to create a nostalgic, retro feel.",
  idealFor: "Couples desiring a timeless and classic aesthetic."
}];
const StyleSection = ({
  styles,
  title,
  subtitle,
  icon: Icon
}: {
  styles: typeof photographyStyles;
  title: string;
  subtitle: string;
  icon: any;
}) => {
  const navigate = useNavigate();
  return <div className="mb-32 last:mb-0">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Icon className="w-8 h-8 text-primary" />
          <h2 className="md:text-4xl font-bold text-xl">{title}</h2>
        </div>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {styles.map((style, index) => <Card key={index} className="overflow-hidden group">
            <div className="relative h-[400px] overflow-hidden">
              <img src={style.image} alt={style.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{style.title}</h3>
                <p className="text-white/90 mb-2">{style.description}</p>
                <p className="text-white/80 text-sm mb-4">
                  <strong>Ideal For:</strong> {style.idealFor}
                </p>
                <Button onClick={() => navigate('/match')} variant="secondary" className="w-full">
                  Like this style? Get Matched Instantly
                </Button>
              </div>
            </div>
          </Card>)}
      </div>
    </div>;
};
export const StyleGallery = () => {
  return <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <StyleSection styles={photographyStyles} title="Wedding Photography Styles" subtitle="Find the perfect photography style that matches your vision" icon={Camera} />
        <StyleSection styles={videographyStyles} title="Wedding Videography Styles" subtitle="Discover the ideal videography approach for your special day" icon={Video} />
      </div>
    </section>;
};