import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Search, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wedding.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="text-xl font-bold bg-gradient-romantic bg-clip-text text-transparent">
              Levasangh
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="bg-gradient-romantic bg-clip-text text-transparent"> Life Partner</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Join thousands of happy couples who found their soulmate through Levasangh. 
                Your journey to a beautiful marriage starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" variant="hero" className="w-full sm:w-auto">
                    Register Free
                  </Button>
                </Link>
                <Link to="/search">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Browse Profiles
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Couples</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2M+</div>
                  <div className="text-sm text-muted-foreground">Verified Profiles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-romantic opacity-20 blur-3xl rounded-full"></div>
              <img
                src={heroImage}
                alt="Happy couple"
                className="relative rounded-2xl shadow-elegant w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Levasangh?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide a safe, authentic, and efficient platform to help you find your perfect match
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-romantic rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">100% Verified</h3>
              <p className="text-sm text-muted-foreground">
                All profiles are manually verified for authenticity and safety
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Smart Matching</h3>
              <p className="text-sm text-muted-foreground">
                Advanced algorithms to find compatible matches based on your preferences
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Privacy First</h3>
              <p className="text-sm text-muted-foreground">
                Your data is secure with end-to-end encryption and privacy controls
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Easy Search</h3>
              <p className="text-sm text-muted-foreground">
                Powerful filters to find exactly what you're looking for
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-romantic text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Soulmate?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join Levasangh today and take the first step towards your happily ever after
          </p>
          <Link to="/register">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-primary fill-primary" />
                <span className="font-bold text-lg">Levasangh</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by millions to find their perfect life partner
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/success-stories" className="hover:text-primary">Success Stories</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
                <li><Link to="/faq" className="hover:text-primary">FAQs</Link></li>
                <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Follow us on social media
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Levasangh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
