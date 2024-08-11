import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Users, Megaphone, Building2, Calendar, FileSignature, Newspaper, Network } from "lucide-react"

const Index = () => {
  const [petition, setPetition] = useState({ name: '', email: '', message: '' });

  const handlePetitionChange = (e) => {
    setPetition({ ...petition, [e.target.name]: e.target.value });
  };

  const handlePetitionSubmit = (e) => {
    e.preventDefault();
    console.log('Petition signed:', petition);
    // Here you would typically send this data to a server
    alert('Thank you for signing the petition!');
    setPetition({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Save Wynnum Community Place</h1>
      
      <Tabs defaultValue="info" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="action">Take Action</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="info">
          <Card>
            <CardHeader>
              <CardTitle>About Wynnum Community Place</CardTitle>
              <CardDescription>Learn about the impact and importance of our community center</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Wynnum Community Place has been serving our community for over 20 years, providing essential services such as:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Serving 10,000+ meals annually to those in need</li>
                <li>Offering counseling services to 500+ individuals</li>
                <li>Providing a safe space for 200+ youth weekly</li>
                <li>Hosting 50+ community events each year</li>
              </ul>
              <p>The potential closure of this vital center would leave a significant gap in our community's support network.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="action">
          <Card>
            <CardHeader>
              <CardTitle>Take Action</CardTitle>
              <CardDescription>Join our efforts to save Wynnum Community Place</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <p>Join our coalition of community groups and local businesses</p>
              </div>
              <div className="flex items-center space-x-2">
                <Megaphone className="h-5 w-5" />
                <p>Share your story on social media using #SaveWynnumCommunityPlace</p>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5" />
                <p>Contact your local council member to express your support</p>
              </div>
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
                <Button type="submit">Sign the Petition</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Join us at these events to support our cause</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Community Rally</p>
                    <p>Date: June 15, 2023 | Location: Wynnum Park</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Fundraising Dinner</p>
                    <p>Date: July 1, 2023 | Location: Wynnum Community Hall</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Town Hall Meeting</p>
                    <p>Date: July 10, 2023 | Location: Wynnum Library</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>Helpful links and information for our campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <FileSignature className="h-5 w-5" />
                  <a href="#" className="text-blue-600 hover:underline">Download our petition template</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Newspaper className="h-5 w-5" />
                  <a href="#" className="text-blue-600 hover:underline">Press release for media outlets</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Network className="h-5 w-5" />
                  <a href="#" className="text-blue-600 hover:underline">Connect with advocacy networks</a>
                </li>
                <li className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5" />
                  <a href="#" className="text-blue-600 hover:underline">FAQs about the campaign</a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
