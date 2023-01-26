import { prisma } from "../server/db";

 async function CustomUsername(email: string) {
  let tempUsername = email.substring(0, email.indexOf("@"));
  const noOfSameUsername = await prisma.profile.count({
    where: {
      username: tempUsername,
    },
  });
  if (noOfSameUsername === 0) {
    return tempUsername;
  } else {
    tempUsername = tempUsername + String(noOfSameUsername)
    return tempUsername;
  }
}


export default CustomUsername;
