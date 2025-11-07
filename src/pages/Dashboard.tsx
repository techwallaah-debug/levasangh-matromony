import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Search, User, Bell, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="text-xl font-bold bg-gradient-romantic bg-clip-text text-transparent">
              Levasangh
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Link to="/">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, User!</h1>
          <p className="text-muted-foreground">Find your perfect match today</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Link to="/search">
            <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <Search className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1">Search Profiles</h3>
              <p className="text-sm text-muted-foreground">Find your match</p>
            </Card>
          </Link>
          <Link to="/matches">
            <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <Heart className="h-8 w-8 text-primary mb-3 fill-primary" />
              <h3 className="font-semibold mb-1">My Matches</h3>
              <p className="text-sm text-muted-foreground">View compatible profiles</p>
            </Card>
          </Link>
          <Link to="/profile">
            <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <User className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold mb-1">My Profile</h3>
              <p className="text-sm text-muted-foreground">Update your details</p>
            </Card>
          </Link>
          <Link to="/notifications">
            <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <Bell className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold mb-1">Notifications</h3>
              <p className="text-sm text-muted-foreground">Check updates</p>
            </Card>
          </Link>
        </div>

        {/* Recommended Matches */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Recommended For You</h2>
            <Link to="/matches">
              <Button variant="ghost">View All</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[3/4] bg-muted"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Profile Name</h3>
                  <p className="text-sm text-muted-foreground mb-2">28 yrs, 5'6"</p>
                  <p className="text-sm text-muted-foreground mb-3">Software Engineer, Mumbai</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      View
                    </Button>
                    <Button size="sm" variant="default" className="flex-1">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Activity Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">24</div>
            <p className="text-muted-foreground">Profile Views</p>
          </Card>
          <Card className="p-6">
            <div className="text-3xl font-bold text-secondary mb-2">12</div>
            <p className="text-muted-foreground">Interests Received</p>
          </Card>
          <Card className="p-6">
            <div className="text-3xl font-bold text-accent mb-2">8</div>
            <p className="text-muted-foreground">Shortlisted</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
