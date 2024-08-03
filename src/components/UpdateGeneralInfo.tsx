import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const UpdateGeneralInfo = () => {
  return (
    <Card className="bg-muted/40">
      <CardHeader>
        <CardTitle>General</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        ƒ
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Enter your phone number" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="profile-picture">Profile Picture</Label>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder-user.jpg" alt="Profile Picture" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <Input
              id="profile-picture"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              className="w-3/4 md:w-1/3 md:ml-5"
            />
          </div>
        </div>
        <Button variant="outline">Change</Button>
      </CardContent>
    </Card>
  );
};
export default UpdateGeneralInfo;
