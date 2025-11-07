import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Crown, Star, Zap, ChevronLeft, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      period: "Forever",
      icon: Star,
      color: "text-muted-foreground",
      gradient: "from-muted to-muted/50",
      features: [
        "Create Profile",
        "View 10 Profiles per day",
        "Send 5 Interests per month",
        "Basic Search Filters",
        "View Contact Numbers (Limited)",
        "Standard Customer Support",
      ],
      limitations: [
        "Limited profile visibility",
        "No chat access",
        "Basic match recommendations",
      ],
    },
    {
      id: "silver",
      name: "Silver",
      price: "₹999",
      period: "per month",
      icon: Sparkles,
      color: "text-slate-400",
      gradient: "from-slate-400 to-slate-600",
      features: [
        "Everything in Free",
        "View 50 Profiles per day",
        "Send 25 Interests per month",
        "Advanced Search Filters",
        "Chat with 10 Matches",
        "View All Contact Numbers",
        "Priority Customer Support",
        "Profile Boost (2x per month)",
      ],
      popular: false,
    },
    {
      id: "gold",
      name: "Gold",
      price: "₹1,999",
      period: "per month",
      icon: Crown,
      color: "text-amber-500",
      gradient: "from-amber-400 to-amber-600",
      features: [
        "Everything in Silver",
        "Unlimited Profile Views",
        "Unlimited Interests",
        "Unlimited Chat Access",
        "See Who Viewed Your Profile",
        "Advanced Matchmaking Algorithm",
        "Dedicated Relationship Manager",
        "Profile Boost (5x per month)",
        "Featured Profile Listing",
        "Video Call Support",
      ],
      popular: true,
    },
    {
      id: "platinum",
      name: "Platinum",
      price: "₹3,999",
      period: "per month",
      icon: Zap,
      color: "text-purple-500",
      gradient: "from-purple-400 to-purple-600",
      features: [
        "Everything in Gold",
        "Premium Profile Badge",
        "Top Search Results Priority",
        "Personalized Match Curation",
        "Background Verification",
        "Personal Matchmaker Assistance",
        "Exclusive Events Access",
        "Profile Boost (Unlimited)",
        "Priority Chat Response",
        "Horoscope Compatibility Reports",
        "Wedding Planning Discounts",
      ],
      popular: false,
    },
  ];

  const handleSelectPlan = (planId: string) => {
    if (planId === "free") {
      toast({
        title: "Already on Free Plan",
        description: "Upgrade to a premium plan for more features.",
      });
      return;
    }
    setSelectedPlan(planId);
  };

  const handleProceedToPayment = () => {
    if (!selectedPlan) {
      toast({
        title: "Select a Plan",
        description: "Please select a subscription plan to continue.",
        variant: "destructive",
      });
      return;
    }

    const plan = plans.find(p => p.id === selectedPlan);
    toast({
      title: "Proceeding to Payment",
      description: `You selected ${plan?.name} plan. Redirecting to payment...`,
    });
    
    // In real implementation, redirect to payment gateway
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <h1 className="text-xl font-semibold">Subscription Plans</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find your life partner with our premium features. Select a plan that fits your needs.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            
            return (
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all hover:shadow-lg ${
                  isSelected ? "ring-2 ring-primary shadow-elegant" : ""
                } ${plan.popular ? "border-primary border-2" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-gradient-romantic text-primary-foreground rounded-bl-lg rounded-tr-none">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Separator />
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={isSelected ? "default" : plan.popular ? "hero" : "outline"}
                    className="w-full"
                    onClick={() => handleSelectPlan(plan.id)}
                  >
                    {isSelected ? "Selected" : plan.id === "free" ? "Current Plan" : "Select Plan"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Proceed to Payment */}
        {selectedPlan && selectedPlan !== "free" && (
          <div className="flex justify-center">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Complete Your Purchase</CardTitle>
                <CardDescription>
                  You've selected the {plans.find(p => p.id === selectedPlan)?.name} plan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Plan Price:</span>
                  <span className="text-2xl font-bold">
                    {plans.find(p => p.id === selectedPlan)?.price}
                  </span>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="text-2xl font-bold text-primary">
                    {plans.find(p => p.id === selectedPlan)?.price}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={handleProceedToPayment}
                >
                  Proceed to Payment
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Features Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Why Upgrade?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Unlimited Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  View unlimited profiles, send unlimited interests, and chat with all your matches without any restrictions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-primary" />
                  Premium Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get profile boosts, featured listings, and priority in search results to increase your visibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Dedicated Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get personal assistance from our relationship managers and enjoy priority customer support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
