'use client';
import React from 'react';
import Input from '../atoms/Input';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

function SearchForm(): React.ReactNode {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 400);

  return (
    <div className="my-3">
      <Input
        type="text"
        onchange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        placholder="Search post"
      />
    </div>
  );
}

export default SearchForm;
