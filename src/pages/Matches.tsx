import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, Mail, Bookmark, Users, Clock, Star, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const mockMutualInterests = [
  {
    id: 1,
    name: "Anjali Desai",
    age: 25,
    height: "5'5\"",
    education: "B.Tech",
    occupation: "Software Engineer",
    location: "Pune, Maharashtra",
    matchScore: 95,
  },
  {
    id: 2,
    name: "Rohan Kapoor",
    age: 28,
    height: "5'11\"",
    education: "MBA",
    occupation: "Product Manager",
    location: "Mumbai, Maharashtra",
    matchScore: 92,
  },
];

const mockShortlisted = [
  {
    id: 3,
    name: "Kavya Nair",
    age: 26,
    height: "5'6\"",
    education: "CA",
    occupation: "Chartered Accountant",
    location: "Kochi, Kerala",
    matchScore: 88,
  },
  {
    id: 4,
    name: "Aditya Joshi",
    age: 30,
    height: "6'0\"",
    education: "MBBS, MD",
    occupation: "Doctor",
    location: "Bangalore, Karnataka",
    matchScore: 90,
  },
];

const mockViewedMe = [
  {
    id: 5,
    name: "Riya Agarwal",
    age: 24,
    height: "5'4\"",
    education: "MBA",
    occupation: "Marketing Manager",
    location: "Delhi, NCR",
    viewedOn: "2 hours ago",
  },
  {
    id: 6,
    name: "Karan Malhotra",
    age: 29,
    height: "5'10\"",
    education: "B.Tech",
    occupation: "Tech Lead",
    location: "Gurgaon, Haryana",
    viewedOn: "5 hours ago",
  },
  {
    id: 7,
    name: "Meera Shah",
    age: 27,
    height: "5'7\"",
    education: "M.Tech",
    occupation: "Data Analyst",
    location: "Ahmedabad, Gujarat",
    viewedOn: "1 day ago",
  },
];

const Matches = () => {
  const [activeTab, setActiveTab] = useState("mutual");
  const { toast } = useToast();

  const handleSendMessage = (name: string) => {
    toast({
      title: "Message sent!",
      description: `Your message has been sent to ${name}`,
    });
  };

  const handleRemoveShortlist = (name: string) => {
    toast({
      title: "Removed from shortlist",
      description: `${name}'s profile has been removed`,
      variant: "destructive",
    });
  };

  const ProfileCard = ({ profile, type }: { profile: any; type: string }) => (
    <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
      <div className="p-6">
        <div className="flex gap-4">
          {/* Profile Avatar */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-romantic rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">
                {profile.name.split(" ").map((n: string) => n[0]).join("")}
              </span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">{profile.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {profile.age} yrs, {profile.height}
                </p>
              </div>
              {profile.matchScore && (
                <Badge variant="secondary" className="bg-gradient-trust text-white">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  {profile.matchScore}% Match
                </Badge>
              )}
              {profile.viewedOn && (
                <Badge variant="secondary">
                  <Clock className="h-3 w-3 mr-1" />
                  {profile.viewedOn}
                </Badge>
              )}
            </div>

            <div className="space-y-1 text-sm mb-4">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">{profile.education}</span>
              </p>
              <p className="text-muted-foreground">{profile.occupation}</p>
              <p className="text-muted-foreground">{profile.location}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Link to={`/profile/${profile.id}`} className="flex-1">
                <Button size="sm" variant="outline" className="w-full">
                  <Eye className="h-4 w-4 mr-1" />
                  View Profile
                </Button>
              </Link>
              {type === "shortlisted" ? (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleRemoveShortlist(profile.name)}
                >
                  <X className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="default"
                  onClick={() => handleSendMessage(profile.name)}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="text-xl font-bold bg-gradient-romantic bg-clip-text text-transparent">
              Levasangh
            </span>
          </Link>
          <Link to="/dashboard">
            <Button variant="ghost">Back to Dashboard</Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Matches</h1>
          <p className="text-muted-foreground">
            View profiles that match your preferences and interests
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-romantic rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white fill-current" />
              </div>
              <div>
                <div className="text-2xl font-bold">{mockMutualInterests.length}</div>
                <p className="text-sm text-muted-foreground">Mutual Interests</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-trust rounded-full flex items-center justify-center">
                <Bookmark className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">{mockShortlisted.length}</div>
                <p className="text-sm text-muted-foreground">Shortlisted</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">{mockViewedMe.length}</div>
                <p className="text-sm text-muted-foreground">Viewed Me</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">147</div>
                <p className="text-sm text-muted-foreground">Total Matches</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="mutual">
              <Heart className="h-4 w-4 mr-2" />
              Mutual Interests
            </TabsTrigger>
            <TabsTrigger value="shortlisted">
              <Bookmark className="h-4 w-4 mr-2" />
              Shortlisted
            </TabsTrigger>
            <TabsTrigger value="viewed">
              <Eye className="h-4 w-4 mr-2" />
              Who Viewed Me
            </TabsTrigger>
          </TabsList>

          {/* Mutual Interests Tab */}
          <TabsContent value="mutual" className="space-y-4">
            {mockMutualInterests.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-4">
                {mockMutualInterests.map((profile) => (
                  <ProfileCard key={profile.id} profile={profile} type="mutual" />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Mutual Interests Yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start sending interests to profiles you like
                </p>
                <Link to="/search">
                  <Button variant="hero">Browse Profiles</Button>
                </Link>
              </Card>
            )}
          </TabsContent>

          {/* Shortlisted Tab */}
          <TabsContent value="shortlisted" className="space-y-4">
            {mockShortlisted.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-4">
                {mockShortlisted.map((profile) => (
                  <ProfileCard key={profile.id} profile={profile} type="shortlisted" />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Shortlisted Profiles</h3>
                <p className="text-muted-foreground mb-4">
                  Profiles you shortlist will appear here
                </p>
                <Link to="/search">
                  <Button variant="hero">Search Profiles</Button>
                </Link>
              </Card>
            )}
          </TabsContent>

          {/* Who Viewed Me Tab */}
          <TabsContent value="viewed" className="space-y-4">
            {mockViewedMe.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-4">
                {mockViewedMe.map((profile) => (
                  <ProfileCard key={profile.id} profile={profile} type="viewed" />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Profile Views Yet</h3>
                <p className="text-muted-foreground mb-4">
                  Keep your profile updated to attract more visitors
                </p>
                <Link to="/profile">
                  <Button variant="hero">Complete Your Profile</Button>
                </Link>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Matches;
