import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Heart, Search as SearchIcon, Filter, X, Eye, Mail, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

// Mock profile data
const mockProfiles = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 26,
    height: "5'4\"",
    education: "MBA",
    occupation: "Marketing Manager",
    location: "Mumbai, Maharashtra",
    income: "8-10 LPA",
    religion: "Hindu",
    caste: "Brahmin",
    image: null,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    age: 29,
    height: "5'10\"",
    education: "B.Tech",
    occupation: "Software Engineer",
    location: "Bangalore, Karnataka",
    income: "15-20 LPA",
    religion: "Hindu",
    caste: "Kshatriya",
    image: null,
  },
  {
    id: 3,
    name: "Ananya Patel",
    age: 24,
    height: "5'5\"",
    education: "MBBS",
    occupation: "Doctor",
    location: "Ahmedabad, Gujarat",
    income: "10-12 LPA",
    religion: "Hindu",
    caste: "Patel",
    image: null,
  },
  {
    id: 4,
    name: "Arjun Singh",
    age: 31,
    height: "6'0\"",
    education: "MBA",
    occupation: "Business Owner",
    location: "Delhi, NCR",
    income: "25+ LPA",
    religion: "Sikh",
    caste: "Sikh",
    image: null,
  },
  {
    id: 5,
    name: "Sneha Reddy",
    age: 27,
    height: "5'6\"",
    education: "M.Tech",
    occupation: "Data Scientist",
    location: "Hyderabad, Telangana",
    income: "12-15 LPA",
    religion: "Hindu",
    caste: "Reddy",
    image: null,
  },
  {
    id: 6,
    name: "Vikram Kumar",
    age: 28,
    height: "5'9\"",
    education: "CA",
    occupation: "Chartered Accountant",
    location: "Chennai, Tamil Nadu",
    income: "10-12 LPA",
    religion: "Hindu",
    caste: "Naidu",
    image: null,
  },
];

const Search = () => {
  const [ageRange, setAgeRange] = useState([21, 40]);
  const [heightRange, setHeightRange] = useState([4.5, 6.5]);
  const [showFilters, setShowFilters] = useState(false);
  const { toast } = useToast();

  const handleSendInterest = (name: string) => {
    toast({
      title: "Interest sent!",
      description: `Your interest has been sent to ${name}`,
    });
  };

  const handleShortlist = (name: string) => {
    toast({
      title: "Profile shortlisted",
      description: `${name}'s profile has been added to your shortlist`,
    });
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Age Filter */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Age Range</Label>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground w-12">{ageRange[0]} yrs</span>
          <Slider
            value={ageRange}
            onValueChange={setAgeRange}
            min={18}
            max={60}
            step={1}
            className="flex-1"
          />
          <span className="text-sm text-muted-foreground w-12">{ageRange[1]} yrs</span>
        </div>
      </div>

      {/* Height Filter */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Height Range</Label>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground w-12">{heightRange[0]}'</span>
          <Slider
            value={heightRange}
            onValueChange={setHeightRange}
            min={4}
            max={7}
            step={0.1}
            className="flex-1"
          />
          <span className="text-sm text-muted-foreground w-12">{heightRange[1]}'</span>
        </div>
      </div>

      {/* Religion Filter */}
      <div className="space-y-2">
        <Label htmlFor="religion" className="text-base font-semibold">Religion</Label>
        <Select>
          <SelectTrigger id="religion">
            <SelectValue placeholder="Select religion" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="hindu">Hindu</SelectItem>
            <SelectItem value="muslim">Muslim</SelectItem>
            <SelectItem value="christian">Christian</SelectItem>
            <SelectItem value="sikh">Sikh</SelectItem>
            <SelectItem value="buddhist">Buddhist</SelectItem>
            <SelectItem value="jain">Jain</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Caste Filter */}
      <div className="space-y-2">
        <Label htmlFor="caste" className="text-base font-semibold">Caste</Label>
        <Input id="caste" placeholder="Enter caste" />
      </div>

      {/* Education Filter */}
      <div className="space-y-2">
        <Label htmlFor="education" className="text-base font-semibold">Education</Label>
        <Select>
          <SelectTrigger id="education">
            <SelectValue placeholder="Select education" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="high-school">High School</SelectItem>
            <SelectItem value="diploma">Diploma</SelectItem>
            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
            <SelectItem value="masters">Master's Degree</SelectItem>
            <SelectItem value="phd">PhD/Doctorate</SelectItem>
            <SelectItem value="professional">Professional Degree</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Occupation Filter */}
      <div className="space-y-2">
        <Label htmlFor="occupation" className="text-base font-semibold">Occupation</Label>
        <Select>
          <SelectTrigger id="occupation">
            <SelectValue placeholder="Select occupation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="software">Software Professional</SelectItem>
            <SelectItem value="doctor">Doctor</SelectItem>
            <SelectItem value="engineer">Engineer</SelectItem>
            <SelectItem value="teacher">Teacher</SelectItem>
            <SelectItem value="business">Business Owner</SelectItem>
            <SelectItem value="government">Government Employee</SelectItem>
            <SelectItem value="finance">Finance Professional</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Income Filter */}
      <div className="space-y-2">
        <Label htmlFor="income" className="text-base font-semibold">Annual Income</Label>
        <Select>
          <SelectTrigger id="income">
            <SelectValue placeholder="Select income range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="0-3">Below 3 LPA</SelectItem>
            <SelectItem value="3-5">3-5 LPA</SelectItem>
            <SelectItem value="5-8">5-8 LPA</SelectItem>
            <SelectItem value="8-10">8-10 LPA</SelectItem>
            <SelectItem value="10-15">10-15 LPA</SelectItem>
            <SelectItem value="15-20">15-20 LPA</SelectItem>
            <SelectItem value="20-25">20-25 LPA</SelectItem>
            <SelectItem value="25+">25+ LPA</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Location Filter */}
      <div className="space-y-2">
        <Label htmlFor="location" className="text-base font-semibold">Location</Label>
        <Input id="location" placeholder="City, State" />
      </div>

      <div className="flex gap-3 pt-4">
        <Button variant="hero" className="flex-1">Apply Filters</Button>
        <Button variant="outline" className="flex-1">Clear All</Button>
      </div>
    </div>
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Search Profiles</h1>
            <p className="text-muted-foreground">
              Found {mockProfiles.length} profiles matching your preferences
            </p>
          </div>
          
          {/* Mobile Filter Toggle */}
          <Sheet open={showFilters} onOpenChange={setShowFilters}>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Advanced Filters</SheetTitle>
                <SheetDescription>
                  Refine your search with detailed filters
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Advanced Filters</h2>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <FilterContent />
            </Card>
          </aside>

          {/* Profile Grid */}
          <div>
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by name, ID, or keyword..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Profile Cards Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProfiles.map((profile) => (
                <Card
                  key={profile.id}
                  className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Profile Image */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-romantic rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-white">
                          {profile.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Profile Photo</p>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{profile.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {profile.age} yrs, {profile.height}
                      </p>
                    </div>

                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">{profile.education}</span> • {profile.occupation}
                      </p>
                      <p className="text-muted-foreground">{profile.location}</p>
                      <p className="text-muted-foreground">
                        {profile.religion} • {profile.caste}
                      </p>
                      <p className="font-medium text-secondary">{profile.income}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Link to={`/profile/${profile.id}`} className="flex-1">
                        <Button size="sm" variant="outline" className="w-full">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleShortlist(profile.name)}
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => handleSendInterest(profile.name)}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Profiles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
