import { motion } from 'framer-motion';

interface SuccessStoriesProps {
  onOpenContact: () => void;
}

const stories = [
  {
    segment: 'Retail Shop',
    business: 'A boutique in Swaroop Nagar',
    problem: 'Lost 10+ hours weekly on manual inventory tracking and stock alerts',
    solution: 'Simple inventory system with automatic low-stock notifications',
    result: 'Saved 10 hours per week and increased sales by 15% in one month',
    icon: '🛍️',
    gradient: 'from-pink-600/20 to-rose-600/20',
    borderGradient: 'from-pink-500 to-rose-500',
  },
  {
    segment: 'Restaurant',
    business: 'A cafe in Gomti Nagar',
    problem: 'Table management chaos during peak hours, missing orders, slow billing',
    solution: 'Easy table management system with kitchen order tracking',
    result: 'Served 30% more customers daily, zero missed orders',
    icon: '🍽️',
    gradient: 'from-orange-600/20 to-amber-600/20',
    borderGradient: 'from-orange-500 to-amber-500',
  },
  {
    segment: 'School',
    business: 'A private school in Indira Nagar',
    problem: 'Parents frustrated with late fee reminders, manual attendance records',
    solution: 'Automated fee notifications and digital attendance system',
    result: 'Fee collection improved by 40%, parents receive instant updates',
    icon: '🎓',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    borderGradient: 'from-blue-500 to-cyan-500',
  },
  {
    segment: 'General Business',
    business: 'A trading firm in Alambagh',
    problem: 'Drowning in paperwork, billing errors costing thousands monthly',
    solution: 'Digital billing system with automatic GST calculations',
    result: 'Went completely paperless, eliminated billing errors, saved ₹25,000/month',
    icon: '📊',
    gradient: 'from-purple-600/20 to-violet-600/20',
    borderGradient: 'from-purple-500 to-violet-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SuccessStories = ({ onOpenContact }: SuccessStoriesProps) => {
  return (
    <section id="stories" className="relative py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-indigo-300 mb-4"
          >
            Success Stories
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Local Businesses
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Getting Real Results
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how businesses like yours are saving time and growing with simple, 
            reliable software that just works.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full glass rounded-2xl p-8 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 grid-pattern opacity-30" />

                {/* Border Gradient */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${story.borderGradient} p-[1px]`}>
                  <div className="h-full w-full bg-slate-950/90 rounded-2xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Segment */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{story.icon}</span>
                    <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wide">
                      {story.segment}
                    </span>
                  </div>

                  {/* Business */}
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {story.business}
                  </h3>

                  {/* Problem → Solution → Result */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-red-400 mb-1 uppercase tracking-wide">
                        Problem
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {story.problem}
                      </p>
                    </div>

                    <div className="border-l-2 border-indigo-500/30 pl-4">
                      <div className="text-xs font-semibold text-indigo-400 mb-1 uppercase tracking-wide">
                        Solution
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {story.solution}
                      </p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <div className="text-xs font-semibold text-green-400 mb-1 uppercase tracking-wide">
                        Result
                      </div>
                      <p className="text-white text-sm font-medium leading-relaxed">
                        {story.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Your business could be our next success story
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenContact}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-lg"
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
