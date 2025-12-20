import ProjectDetailComponent from "@/app/components/projects/projectdetail";
import React from "react";

type ParamsProps = {
  params: Promise<{ id: string }>;
};
const ProjectDetail = async ({ params }: ParamsProps) => {
  const { id } = await params;
  // console.log(id);

  return (
    <div className="">
      <ProjectDetailComponent id={id} />
    </div>
  );
};

export default ProjectDetail;
