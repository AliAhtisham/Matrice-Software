import { motion } from 'framer-motion';
import { CloudIcon, ServerIcon, DevicePhoneMobileIcon } from './Icons';
import { smoothScrollToWithOffset } from '../utils/scroll';

interface FeaturesProps {
  onOpenContact: () => void;
}

const services = [
  {
    icon: CloudIcon,
    title: 'For Retail Shops',
    description: 'Track every product, get alerts when stock runs low, and bill customers faster. No more manual counting or lost sales.',
    features: ['Instant stock alerts', 'Fast billing & GST', 'Customer loyalty tracking'],
    gradient: 'from-pink-600/20 to-rose-600/20',
    borderGradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: ServerIcon,
    title: 'For Restaurants & Cafes',
    description: 'Manage tables, track orders from kitchen to table, and speed up billing during rush hours. Serve more customers, miss zero orders.',
    features: ['Table management', 'Kitchen order tracking', 'Digital menu ready'],
    gradient: 'from-orange-600/20 to-amber-600/20',
    borderGradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'For Schools & Institutes',
    description: 'Automate fee reminders, track attendance digitally, and keep parents updated instantly. Spend less time on admin, more on students.',
    features: ['Auto fee notifications', 'Digital attendance', 'Parent communication'],
    gradient: 'from-blue-600/20 to-cyan-600/20',
    borderGradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CloudIcon,
    title: 'For Any Local Business',
    description: 'Go completely paperless with automated billing, record keeping, and reporting. Access your data from anywhere—shop, home, or on the go.',
    features: ['Paperless operations', 'Access from anywhere', 'Automated reports'],
    gradient: 'from-purple-600/20 to-violet-600/20',
    borderGradient: 'from-purple-500 to-violet-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const Features = ({ onOpenContact }: FeaturesProps) => {
  return (
    <section id="services" className="relative py-32 px-6">
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
            Who We Help
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Built for Your Business
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ready in Days, Not Months
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you run a shop, restaurant, school, or any local business—we have 
            simple, reliable software that solves your daily headaches.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full glass rounded-2xl p-8 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 grid-pattern opacity-30" />

                {/* Border Gradient */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.borderGradient} p-[1px]`}>
                  <div className="h-full w-full bg-slate-950/90 rounded-2xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} p-3 border border-white/10`}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <motion.button
                    onClick={onOpenContact}
                    className="mt-8 flex items-center gap-2 text-indigo-400 font-medium group-hover:gap-4 transition-all cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get Started</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
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
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-4">
            ✅ No technical training required  •  💸 Zero setup fees  •  ⚡ Ready in days, not months
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScrollToWithOffset('stories')}
            className="px-8 py-4 glass rounded-xl font-semibold border border-indigo-500/50 hover:border-indigo-400 transition-all inline-flex items-center gap-2"
          >
            <span>See Success Stories</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
