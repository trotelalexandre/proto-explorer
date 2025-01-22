import RecentBlocks from "../components/features/RecentBlocks";
import RecentTransactions from "../components/features/RecentTransactions";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

function Home() {
  return (
    <div className="mx-auto p-4 py-8 md:py-12">
      <h1 className="text-2xl font-bold mb-8">Proto Explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Blocks</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentBlocks />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
