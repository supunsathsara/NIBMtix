import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UpdateBankAccount = () => {
  return (
    <Card className="bg-muted/40">
    <CardHeader>
      <CardTitle>Bank Account Details</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
    <div className="grid gap-2">
        <Label htmlFor="account-name">Account Name</Label>
        <Input id="account-name" placeholder="Enter your account name as per bank" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="bank-name">Bank Name</Label>
        <Input id="bank-name" placeholder="Enter your bank name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="account-number">Account Number</Label>
        <Input
          id="account-number"
          placeholder="Enter your account number"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="bank-branch">Branch</Label>
        <Input
          id="bank-branch"
          placeholder="Enter your bank branch"
        />
      </div>
      <Button variant="outline">Update Account</Button>
    </CardContent>
  </Card>
  )
}
export default UpdateBankAccount