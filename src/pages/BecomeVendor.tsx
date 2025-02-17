
import { ArrowRight, Check, Shield, Gift, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BecomeVendor = () => {
  const features = {
    free: [
      "15% commission per booking",
      "Standard listing visibility",
      "Limited second-shooter access",
      "General outreach campaigns",
      "Email support",
      "Basic profile customization",
    ],
    pro: [
      "10% commission per booking",
      "Featured listing + Priority placement",
      "Instant second-shooter alerts",
      "Targeted ad campaigns across platforms",
      "Priority support",
      "SEO suggestions for your website",
      "Enhanced profile customization",
      "Access to photo editing requests",
    ],
  };

  return (
    <AuroraBackground className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4 dark:text-white text-slate-900">
            Become a Vendor
          </h1>
          <p className="text-xl text-muted-foreground dark:text-slate-200">
            Grow Your Bookings Without Breaking the Bank
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="relative bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Free Plan</CardTitle>
              <CardDescription>Basic listing and bookings</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {features.free.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Sign Up Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-primary bg-white/80 backdrop-blur-sm">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                Recommended
              </span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Pro Plan</CardTitle>
              <CardDescription>Maximum visibility & earnings</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {features.pro.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg space-y-4">
                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Gift className="h-5 w-5 text-primary" />
                    Your Subscription Reinvested
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We invest your monthly subscription directly into targeted ad campaigns across social media and search platforms to bring you more leads and bookings.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Our Lead Guarantee
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    If we don't find you any leads for two consecutive months, you'll get the next two months free.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Go Pro
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Transparent Pricing, Real Results
          </h2>
          <p className="text-muted-foreground mb-8">
            Pro vendors enjoy lower commission rates and get their subscription reinvested into targeted marketing campaigns to help grow their business.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm">Secure payments • Cancel anytime • No hidden fees</span>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default BecomeVendor;
