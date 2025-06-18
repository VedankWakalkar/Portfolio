import { educationSchema } from "@/lib/schemas";
import educationData from "@/data/education.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export default function Experience() {
  const education = educationSchema.parse(educationData).education;
  return (
    <>
      <Tabs defaultValue="work">
        <TabsList>
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="work"></TabsContent>
        <TabsContent value="education"></TabsContent>
      </Tabs>
    </>
  );
}
