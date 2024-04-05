import { useState, useEffect } from "react";
import { Section, Container, Grid } from "@containers";
import { Card } from "@ui";

import { PostItem } from "@interface";
import { postAPI } from "@service";

import "./style.scss";
const index = () => {
  const [post, setPost] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | boolean>("");

  async function getPost() {
    try {
      const response = await postAPI.get();

      if (response.status !== 200) {
        setError(response.statusText);
        setLoading(false);
      }
      setPost(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Section id={"post"} title="POSTS">
      <Container>
        {!loading ? (
          <Grid cols="4" gap="50">
            {post?.map((item: PostItem) => {
              return <Card key={item.id} data={item} />
            })}
          </Grid>
        ) : (
          <h1>LOADING ....</h1>
        )}

        {error && <h1>{error}</h1>}
      </Container>
    </Section>
  );
};

export default index;
