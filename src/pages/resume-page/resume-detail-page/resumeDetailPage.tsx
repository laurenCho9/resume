import axios from "axios";
import { useEffect, useState } from "react";
import "./resume-detail-page.style.scss";
import { FcPicture } from "react-icons/fc";
import { useParams } from "react-router-dom";

type ProjectDetail = {
  name?: string;
  contribution?: string;
  subImage1?: string;
  subImage2?: string;
  subImage3?: string;
  subImage4?: string;
  subImage5?: string;
  thumbnail?: string;
  thumbnailImage?: string;
  mockup?: string;
  mockupPCImage?: string;
  mockupMobileImage?: string;
  description?: string;
  descriptionImage?: string;
};

type ProjectImage = {
  id: number;
  title: string;
  detail: ProjectDetail[];
};

type DataObj = {
  projectImages: ProjectImage[];
};

const ProjectImageDetailPage = () => {
  // id를 useParams로 가져오고, string | undefined로 설정
  const { id } = useParams<{ id: string | undefined }>();
  const [dataObj, setDataObj] = useState<DataObj | null>(null); // 타입 적용

  useEffect(() => {
    axios
      .get("/server/resume.json")
      .then((response) => {
        const data: DataObj = response.data;
        setDataObj(data); // data를 DataObj 타입으로 설정
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!dataObj) {
    return <div>Loading...</div>;
  }

  // id가 있는 경우에만 find 실행
  const projectImage = dataObj.projectImages.find(
    (item) => item.id === Number(id) // id가 undefined가 아닌 경우 Number로 변환
  );

  return (
    <div>
      <div className="content">
        {projectImage ? (
          <div key={projectImage.id}>
            <h1 className="flex">
              <FcPicture className="image_icon60" />
              <span>{projectImage.title}</span>
            </h1>

            {projectImage.detail.map((detailItem, index) => (
              <div key={index}>
                {detailItem.name && (
                  <h3 className="margintop24bottom6">{detailItem.name}</h3>
                )}
                {detailItem.contribution && (
                  <p className="font_grey padding-6-2 bold600">
                    {detailItem.contribution}
                  </p>
                )}

                <ul className="padding-6-2">
                  <li className="flex column">
                    {detailItem.subImage1 && (
                      <img
                        className="width100 project-image"
                        src={detailItem.subImage1}
                        alt="project images"
                      />
                    )}
                    {detailItem.subImage2 && (
                      <img
                        className="width100 project-image"
                        src={detailItem.subImage2}
                        alt="project images"
                      />
                    )}
                    {detailItem.subImage3 && (
                      <img
                        className="width100 project-image"
                        src={detailItem.subImage3}
                        alt="project images"
                      />
                    )}
                    {detailItem.subImage4 && (
                      <img
                        className="width100 project-image"
                        src={detailItem.subImage4}
                        alt="project images"
                      />
                    )}
                    {detailItem.subImage5 && (
                      <img
                        className="width100 project-image"
                        src={detailItem.subImage5}
                        alt="project images"
                      />
                    )}

                    {detailItem.thumbnail && (
                      <b className="padding-6-2 bold600">
                        {detailItem.thumbnail}
                      </b>
                    )}
                    {detailItem.thumbnailImage && (
                      <img
                        className="width100 project-image"
                        src={detailItem.thumbnailImage}
                        alt="project images"
                      />
                    )}
                  </li>
                  <li className="flex column">
                    {detailItem.mockup && (
                      <b className="padding-18-2 bold600">
                        {detailItem.mockup}
                      </b>
                    )}
                    <div className="flex gap2">
                      {detailItem.mockupPCImage && (
                        <img
                          className="width50 project-image"
                          src={detailItem.mockupPCImage}
                          alt="project images"
                        />
                      )}
                      {detailItem.mockupMobileImage && (
                        <img
                          className="width50 project-image"
                          src={detailItem.mockupMobileImage}
                          alt="project images"
                        />
                      )}
                    </div>
                  </li>
                  <li className="flex column">
                    {detailItem.description && (
                      <b className="padding-18-2 bold600">
                        {detailItem.description}
                      </b>
                    )}
                    {detailItem.descriptionImage && (
                      <img
                        className="width100 project-image"
                        src={detailItem.descriptionImage}
                        alt="project images"
                      />
                    )}
                  </li>
                </ul>

                <div className="row_space"></div>
                <div className="gray_hr"></div>
              </div>
            ))}
          </div>
        ) : (
          <div>Portfolio item not found</div>
        )}
      </div>
    </div>
  );
};

export default ProjectImageDetailPage;
