import { useState } from 'react';
import { Film } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { MediaCard } from '@/components/MediaCard';
import { WebsiteDetail } from '@/pages/WebsiteDetail';
import { mediaSites } from '@/data/sites';
import { MediaCategory } from '@/types';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<MediaCategory>('all');
  const [selectedSiteId, setSelectedSiteId] = useState<string | null>(null);

  const filteredSites = mediaSites.filter((site) => {
    const matchesSearch = site.name.toLowerCase().includes(search.toLowerCase()) ||
      site.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || site.category === category;
    return matchesSearch && matchesCategory;
  });

  if (selectedSiteId) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <button
              onClick={() => setSelectedSiteId(null)}
              className="flex items-center gap-2 font-bold text-xl hover:text-primary transition-colors"
            >
              <Film className="h-6 w-6" />
              <span>MediaGuide</span>
            </button>
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <WebsiteDetail siteId={selectedSiteId} onBack={() => setSelectedSiteId(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Film className="h-6 w-6" />
            <span>MediaGuide</span>
          </div>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-center">
            Discover Amazing Media Sites
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Your curated guide to the best streaming platforms, featuring movies,
            TV shows, anime, and documentaries.
          </p>
        </div>

        <div className="space-y-6">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter
            selectedCategory={category}
            onCategoryChange={setCategory}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredSites.map((site) => (
            <MediaCard 
              key={site.id} 
              site={site} 
              onClick={() => setSelectedSiteId(site.id)}
            />
          ))}
          {filteredSites.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                No media sites found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;