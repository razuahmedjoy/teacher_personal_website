import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
} from "@material-tailwind/react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import EducationImage from "./../assets/education.png";
import educationData from "./../data/education.json";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetcher";
import LoadingScreen from "./LoadingScreen";

export function Education() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const result = await fetchData(`${import.meta.env.VITE_API_URL}/education.json`);
                setData(result);  // Store the fetched data in the state
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchDataFromAPI();
    }, []);

    if (loading) return <LoadingScreen />;

    return (
        <section id="education">
            <h2 className="text-center text-4xl font-medium mb-8">Educations</h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 py-12 justify-center">
                    {/* Left section */}
                    <div className="content-center">
                        <img
                            src={EducationImage}
                            alt="Education"
                            className="object-cover rounded-ee-xl rounded-ss-xl mx-auto w-2/3"
                        />
                    </div>
                    {/* Right section */}
                    <div className="w-full md:w-[40rem] mx-auto mt-5">
                        <Timeline>
                            {data?.map((item, index) => (
                                <TimelineItem key={index} className="h-44">
                                    {/* if the last element don't show connector */}
                                    {index !== educationData.length - 1 && (
                                        <TimelineConnector className="!w-[78px]" />
                                    )}
                                    <TimelineHeader className="group relative rounded-xl bg-white py-3 pl-2 md:pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 border border-gray-400 hover:border hover:border-secondary transition-all duration-300 cursor-pointer">
                                        <TimelineIcon className="p-3 group-hover:bg-secondary group-hover:text-white transition-all duration-300" variant="ghost" >
                                            <AcademicCapIcon className="h-5 w-5" />
                                        </TimelineIcon>
                                        <div className="w-full flex flex-col gap-1">
                                            <div className="w-full flex justify-between">
                                                <Typography variant="h6" color="blue-gray" className="text-secondary">
                                                    {item.degree}
                                                </Typography>
                                                <Typography variant="h6" color="blue-gray" className="text-sm md:text-lg">
                                                    {item?.year}
                                                </Typography>
                                            </div>

                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="font-normal text-black"
                                            >
                                                {item.institute}
                                            </Typography>

                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="font-normal"
                                            >
                                                {item?.result}
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="font-normal mt-2"
                                            >
                                                {item?.short_description}
                                            </Typography>
                                        </div>
                                    </TimelineHeader>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </div>
        </section>
    );
}
