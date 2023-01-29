import { type IncomingMessage, type ServerResponse } from "http";
import { getServerAuthSession } from "../server/auth";

const getServerSideProps = async ({
  req,
  res,
}: {
  req: IncomingMessage & {
    cookies: Partial<{
      [key: string]: string;
    }>;
  };
  res: ServerResponse<IncomingMessage>;
}) => {
  const session = await getServerAuthSession({ req, res });
  return {
    props: {
      userData: session,
    },
  };
};
export default getServerSideProps;
