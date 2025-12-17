import { User, Briefcase, Code } from "lucide-react";


export const AboutSection  = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & AI Enthusiast</h3>

                    <p className="text-muted-foreground">
                        With over 1 year of experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.
                    </p>

                    <p className="text-muted-foreground">
                        My expertise includes HTML, CSS, JavaScript, React, and Tailwind CSS. I am also exploring the exciting field of Artificial Intelligence and its applications in web development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> {" "}
                            Get In Touch
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground"> 
                                    Creating responsive and dynamic web applications using modern frameworks and best practices.
                                </p>
                            </div>
                        </div>
                    </div>
                     <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                                <p className="text-muted-foreground"> 
                                    Designing intuitive user interfaces and seamless user experiences for web applications.
                                </p>
                            </div>
                        </div>
                     </div>
                      <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
                                <p className="text-muted-foreground"> 
                                    Leading projects from concept to completion with agile methodologies and effective communication.
                                </p>
                            </div>
                        </div>
                      </div>

                </div>

            </div>

        </div>
    </section>;
}