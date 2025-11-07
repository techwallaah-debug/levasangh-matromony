import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  MessageCircle,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Users,
  Home,
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
  DollarSign,
  Languages,
  Utensils,
  Moon,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ProfileDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const profileId = searchParams.get("id") || "1";
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [isShortlisted, setIsShortlisted] = useState(false);

  // Mock profile data
  const profile = {
    id: profileId,
    name: "Priya Sharma",
    age: 28,
    height: "5'5\"",
    occupation: "Software Engineer",
    education: "B.Tech in Computer Science",
    location: "Mumbai, Maharashtra",
    religion: "Hindu",
    caste: "Brahmin",
    subcaste: "Iyer",
    income: "₹12-15 Lakhs",
    maritalStatus: "Never Married",
    photos: [
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800",
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=800",
      "https://images.unsplash.com/photo-1583088388317-9fa2c6f13e39?w=800",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800",
    ],
    about: "I am a career-oriented individual who values family and traditions. Looking for a life partner who shares similar values and can be a good companion for life's journey.",
    family: {
      fatherOccupation: "Retired Bank Manager",
      motherOccupation: "Homemaker",
      siblings: "1 Brother (Married), 1 Sister (Unmarried)",
      familyType: "Nuclear Family",
      familyValues: "Traditional",
      familyStatus: "Middle Class",
    },
    career: {
      company: "Tech Solutions Pvt Ltd",
      designation: "Senior Software Engineer",
      experience: "6 years",
      annualIncome: "₹12-15 Lakhs",
    },
    lifestyle: {
      diet: "Vegetarian",
      drinking: "No",
      smoking: "No",
      languages: "Hindi, English, Marathi",
      hobbies: "Reading, Cooking, Traveling",
    },
    preferences: {
      ageRange: "28-32 years",
      heightRange: "5'8\" - 6'2\"",
      education: "Graduate or Higher",
      occupation: "Employed in IT/Business",
      location: "Mumbai, Pune, Bangalore",
      maritalStatus: "Never Married",
      diet: "Vegetarian preferred",
    },
    horoscope: {
      birthTime: "10:30 AM",
      birthPlace: "Mumbai",
      rashi: "Kumbha (Aquarius)",
      nakshatra: "Dhanishta",
      manglik: "No",
      gotra: "Bharadwaja",
    },
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % profile.photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + profile.photos.length) % profile.photos.length);
  };

  const handleSendInterest = () => {
    toast({
      title: "Interest Sent!",
      description: "Your interest has been sent successfully.",
    });
  };

  const handleMessage = () => {
    navigate("/chat?userId=" + profile.id);
  };

  const handleShortlist = () => {
    setIsShortlisted(!isShortlisted);
    toast({
      title: isShortlisted ? "Removed from Shortlist" : "Added to Shortlist",
      description: isShortlisted 
        ? "Profile removed from your shortlist." 
        : "Profile added to your shortlist.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <h1 className="text-xl font-semibold">Profile Details</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Profile Header Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile Image */}
              <div className="relative">
                <div 
                  className="w-full md:w-48 h-64 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setShowGallery(true)}
                >
                  <img
                    src={profile.photos[currentImageIndex]}
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm">View Gallery</span>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-2">
                  {profile.photos.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentImageIndex ? "w-6 bg-primary" : "w-1.5 bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Basic Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{profile.name}</h2>
                    <p className="text-muted-foreground mt-1">
                      {profile.age} years, {profile.height}
                    </p>
                  </div>
                  <Badge className="bg-gradient-romantic text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" /> Premium
                  </Badge>
                </div>

                <Separator className="my-4" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Occupation:</span>
                    <span className="font-medium">{profile.occupation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Education:</span>
                    <span className="font-medium">{profile.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Income:</span>
                    <span className="font-medium">{profile.income}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleSendInterest} variant="hero" className="flex-1 min-w-[120px]">
                    <Heart className="w-4 h-4 mr-2" />
                    Send Interest
                  </Button>
                  <Button onClick={handleMessage} variant="default" className="flex-1 min-w-[120px]">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button 
                    onClick={handleShortlist} 
                    variant={isShortlisted ? "secondary" : "outline"}
                    className="flex-1 min-w-[120px]"
                  >
                    <Star className={`w-4 h-4 mr-2 ${isShortlisted ? "fill-current" : ""}`} />
                    {isShortlisted ? "Shortlisted" : "Shortlist"}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="family">Family</TabsTrigger>
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="horoscope">Horoscope</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{profile.about}</p>
                <Separator className="my-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Religion:</span>
                    <p className="font-medium">{profile.religion}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Caste:</span>
                    <p className="font-medium">{profile.caste} - {profile.subcaste}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Marital Status:</span>
                    <p className="font-medium">{profile.maritalStatus}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Family Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-sm text-muted-foreground">Father's Occupation:</span>
                    <p className="font-medium">{profile.family.fatherOccupation}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Mother's Occupation:</span>
                    <p className="font-medium">{profile.family.motherOccupation}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Siblings:</span>
                    <p className="font-medium">{profile.family.siblings}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Family Type:</span>
                    <p className="font-medium">{profile.family.familyType}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Family Values:</span>
                    <p className="font-medium">{profile.family.familyValues}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Family Status:</span>
                    <p className="font-medium">{profile.family.familyStatus}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="career" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Career Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-sm text-muted-foreground">Company:</span>
                    <p className="font-medium">{profile.career.company}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Designation:</span>
                    <p className="font-medium">{profile.career.designation}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Experience:</span>
                    <p className="font-medium">{profile.career.experience}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Annual Income:</span>
                    <p className="font-medium">{profile.career.annualIncome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lifestyle" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Lifestyle & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Utensils className="w-5 h-5 text-primary" />
                    <div>
                      <span className="text-sm text-muted-foreground">Diet:</span>
                      <p className="font-medium">{profile.lifestyle.diet}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Languages className="w-5 h-5 text-primary" />
                    <div>
                      <span className="text-sm text-muted-foreground">Languages:</span>
                      <p className="font-medium">{profile.lifestyle.languages}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Drinking:</span>
                    <p className="font-medium">{profile.lifestyle.drinking}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Smoking:</span>
                    <p className="font-medium">{profile.lifestyle.smoking}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-sm text-muted-foreground">Hobbies & Interests:</span>
                    <p className="font-medium">{profile.lifestyle.hobbies}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Partner Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-sm text-muted-foreground">Age Range:</span>
                    <p className="font-medium">{profile.preferences.ageRange}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Height Range:</span>
                    <p className="font-medium">{profile.preferences.heightRange}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Education:</span>
                    <p className="font-medium">{profile.preferences.education}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Occupation:</span>
                    <p className="font-medium">{profile.preferences.occupation}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Location:</span>
                    <p className="font-medium">{profile.preferences.location}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Marital Status:</span>
                    <p className="font-medium">{profile.preferences.maritalStatus}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Diet:</span>
                    <p className="font-medium">{profile.preferences.diet}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="horoscope" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Moon className="w-5 h-5 text-primary" />
                  Horoscope Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-sm text-muted-foreground">Birth Time:</span>
                    <p className="font-medium">{profile.horoscope.birthTime}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Birth Place:</span>
                    <p className="font-medium">{profile.horoscope.birthPlace}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Rashi:</span>
                    <p className="font-medium">{profile.horoscope.rashi}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Nakshatra:</span>
                    <p className="font-medium">{profile.horoscope.nakshatra}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Manglik:</span>
                    <p className="font-medium">{profile.horoscope.manglik}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Gotra:</span>
                    <p className="font-medium">{profile.horoscope.gotra}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Full Screen Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setShowGallery(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <div className="max-w-4xl max-h-[90vh] w-full px-16">
            <img
              src={profile.photos[currentImageIndex]}
              alt={`${profile.name} - Photo ${currentImageIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center text-white mt-4">
              {currentImageIndex + 1} / {profile.photos.length}
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileDetail;
