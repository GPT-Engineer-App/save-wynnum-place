import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Users, Megaphone, Building2, Calendar, FileSignature, Newspaper, Network, Heart, DollarSign, Briefcase } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const Index = () => {
  const [petition, setPetition] = useState({ name: '', email: '', message: '' });
  const [donationAmount, setDonationAmount] = useState(0);

  const handlePetitionChange = (e) => {
    setPetition({ ...petition, [e.target.name]: e.target.value });
  };

  const handlePetitionSubmit = (e) => {
    e.preventDefault();
    console.log('Petition signed:', petition);
    alert('Thank you for signing the petition!');
    setPetition({ name: '', email: '', message: '' });
  };

  const handleDonationChange = (e) => {
    setDonationAmount(Number(e.target.value));
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    console.log('Donation amount:', donationAmount);
    alert(`Thank you for your donation of $${donationAmount}!`);
    setDonationAmount(0);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Save Wynnum Community Place</h1>
        <p className="text-xl text-gray-600">Together, we can preserve the heart of our community</p>
      </header>
      
      <Tabs defaultValue="info" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="action">Take Action</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="info">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>About Wynnum Community Place</CardTitle>
                <CardDescription>Our impact and importance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">For over two decades, Wynnum Community Place has been the cornerstone of our community, providing essential services and support to those in need.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span>Serving 10,000+ meals annually</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span>Counseling services for 500+ individuals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-green-500" />
                    <span>Safe space for 200+ youth weekly</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-purple-500" />
                    <span>Hosting 50+ community events each year</span>
                  </li>
                </ul>
                <p>The potential closure of this vital center would leave a significant gap in our community's support network.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>Why we need your support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Wynnum Community Place is facing closure due to budget cuts. We're fighting to keep our doors open and continue serving the community.</p>
                <h3 className="font-semibold mb-2">Our Goals:</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex justify-between mb-1">
                      <span>Petition Signatures</span>
                      <span>5,000 / 10,000</span>
                    </div>
                    <Progress value={50} className="w-full" />
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span>Fundraising</span>
                      <span>$25,000 / $100,000</span>
                    </div>
                    <Progress value={25} className="w-full" />
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span>Volunteer Sign-ups</span>
                      <span>75 / 200</span>
                    </div>
                    <Progress value={37.5} className="w-full" />
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="action">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sign the Petition</CardTitle>
                <CardDescription>Add your voice to our cause</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePetitionSubmit} className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={petition.name}
                    onChange={handlePetitionChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={petition.email}
                    onChange={handlePetitionChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Why is Wynnum Community Place important to you?"
                    value={petition.message}
                    onChange={handlePetitionChange}
                    required
                  />
                  <Button type="submit" className="w-full">Sign the Petition</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support Our Cause</CardTitle>
                <CardDescription>Every action counts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Make a Donation</h3>
                  <form onSubmit={handleDonationSubmit} className="space-y-4">
                    <Input
                      type="number"
                      placeholder="Donation Amount ($)"
                      value={donationAmount}
                      onChange={handleDonationChange}
                      min="1"
                      required
                    />
                    <Button type="submit" className="w-full">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Donate Now
                    </Button>
                  </form>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Other Ways to Help</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Megaphone className="h-5 w-5 text-blue-500" />
                      <span>Share on social media: #SaveWynnumCommunityPlace</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-green-500" />
                      <span>Join our volunteer network</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-purple-500" />
                      <span>Offer pro-bono services</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Join us in person to support our cause</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Community Rally</h3>
                    <p className="text-sm text-gray-600">Date: June 15, 2023 | Location: Wynnum Park</p>
                    <p className="mt-1">Join us for a peaceful demonstration to show community support. Bring your signs and your voice!</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Fundraising Dinner</h3>
                    <p className="text-sm text-gray-600">Date: July 1, 2023 | Location: Wynnum Community Hall</p>
                    <p className="mt-1">Enjoy a night of good food and entertainment while supporting our cause. Tickets available now!</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Town Hall Meeting</h3>
                    <p className="text-sm text-gray-600">Date: July 10, 2023 | Location: Wynnum Library</p>
                    <p className="mt-1">Discuss the future of Wynnum Community Place with local officials and community leaders.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                View Full Calendar
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Resources</CardTitle>
              <CardDescription>Tools and information to support our efforts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">For Supporters</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <FileSignature className="h-5 w-5 text-blue-500" />
                      <a href="#" className="text-blue-600 hover:underline">Download petition template</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Megaphone className="h-5 w-5 text-green-500" />
                      <a href="#" className="text-blue-600 hover:underline">Social media kit</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <a href="#" className="text-blue-600 hover:underline">FAQs about the campaign</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Media</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Newspaper className="h-5 w-5 text-purple-500" />
                      <a href="#" className="text-blue-600 hover:underline">Press release</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-yellow-500" />
                      <a href="#" className="text-blue-600 hover:underline">Community impact report</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Network className="h-5 w-5 text-indigo-500" />
                      <a href="#" className="text-blue-600 hover:underline">Media contact information</a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <FileSignature className="mr-2 h-4 w-4" />
                Request Additional Resources
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
