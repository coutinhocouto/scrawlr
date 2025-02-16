import { Upvotes } from "@/components/organisms/Upvotes";
import { UpVotesProvider } from "@/store/providers";

function App() {
	return (
		<UpVotesProvider>
			<Upvotes />
		</UpVotesProvider>
	);
}

export default App;
