'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from '@/ui/global.module.css'

const Pagination = ({totalPages}: {totalPages: number}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = Array.from({length: totalPages}, (_, idx) => idx + 1)

  return allPages.map(page => 
    <Link href={createPageURL(page)} key={page}>
      <button className={styles.paginationButton} style={{backgroundColor: page === currentPage ? '#ffe058b3' : 'gray'}}>
        {page}
      </button>
    </Link>
  )
}

export default Pagination