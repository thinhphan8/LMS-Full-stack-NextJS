import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Courses() {
    const supabase = createServerComponentClient({ cookies: cookies });
    const { data, error } = await supabase.from('courses').select('*');

    if (error) {
        console.error('Error fetching courses:', error);
        return (
            <main>
                <h1>Courses</h1>
                <p>Sorry, there was an error loading the courses.</p>
            </main>
        );
    }

    return (
        <main>
            <h1>Courses</h1>
            <ul>
                {data.map((course) => (
                    <li key={course.id}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={course.image} alt={course.name} />
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}