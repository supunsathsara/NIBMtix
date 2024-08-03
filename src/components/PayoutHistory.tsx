import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const PayoutHistory = () => {
  return (
    <Card className="bg-muted/40">
    <CardHeader>
      <CardTitle>Billing Information</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="payout-history">Payout History</Label>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Receipt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>June 15, 2023</TableCell>
              <TableCell>LKR 500.00</TableCell>
              <TableCell>
                <Link
                  href="#"
                  className="text-blue-600 underline"
                  prefetch={false}
                >
                  View Receipt
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>May 30, 2023</TableCell>
              <TableCell>LKR 350.00</TableCell>
              <TableCell>
                <Link
                  href="#"
                  className="text-blue-600 underline"
                  prefetch={false}
                >
                  View Receipt
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
  )
}
export default PayoutHistory