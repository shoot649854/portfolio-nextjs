import React,  { useState, useEffect } from 'react';
import type { PostMeta } from "@/Type";
import { Typography, Box, useMediaQuery, Link, Paper } from '@mui/material';
import { useIsSmallScreen } from '../GlobalLayout/GlobalMedia';
import ColoredChips from './ColoredChips';
import ResultPost from './ResultPost';

type Props = {
  posts: PostMeta[];
  totalPage: number;
};

const TagSearch = ({ posts, totalPage }: Props) => {
  const postsPerPage = 3;
  const [keyword, setKeyword] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    console.log(keyword);
    setCurrentPage(1); // Reset current page when keyword changes
  }, [keyword]);

  const handleKeywordChange = (newKeyword: string) => {
    setKeyword(newKeyword);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = keyword.length > 0
    ? posts.filter(post => post.tags.includes(keyword)).slice(indexOfFirstPost, indexOfLastPost)
    : posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Box
      marginX={'10%'}
      sx={{
        display: isSmallScreen ? 'block' : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        position: 'relative',
        backgroundSize: '75%',
      }}
    >
      <Box
        sx={{
          flex: '0 0 45%',
          padding: '20px',
          paddingY: '100px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Typography variant="h4">Skills:</Typography>
        <Typography variant="subtitle1" sx={{ mb: '12px' }}>Feel free to take any tags! </Typography>
        {posts.map((post, index) => (
          <Box key={index} sx={{ display: 'inline-block', marginRight: '8px' }}>
            <ColoredChips
              keywords={post.tags}
              setSelectedWord={(word) => setKeyword(word)}
            />
          </Box>
        ))}
      </Box>

      <Box>
        {currentPosts && currentPosts.map((data, index) => (
          <ResultPost key={index} data={data} isSmallScreen={isSmallScreen} />
        ))}

        {/* Pagination */}
        {posts.length > postsPerPage && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {Array.from({ length: Math.ceil(currentPosts.length / postsPerPage) }, (_, index) => index + 1).map(pageNumber => {
            const hasPostsForPage = pageNumber * postsPerPage <= posts.length;
            return hasPostsForPage && (
              <Typography
                key={pageNumber}
                variant="button"
                style={{
                  cursor: 'pointer',
                  marginRight: '5px',
                  fontWeight: currentPage === pageNumber ? 'bold' : 'normal'
                }}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </Typography>
            );
          })}
        </Box>
        )}
      </Box>

    </Box>
  );
}

export default TagSearch;
